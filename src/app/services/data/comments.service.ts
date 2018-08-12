
import { CommsService } from '@acaprojects/ngx-composer';
import { Injectable } from '@angular/core';
import { IUser } from './users.service';

export interface IComment {
    id: string;
    channel_id: string;
    user_id: string;    // ACA User ID
    user: IUser;
    master_id: string;  // ID of master object
    reply_to_id: string;
    replies: IComment[];
    name: string;       // User Staff Code
    description: string;
    other: any;
    likes: string[];
    dislikes: string[];
    created_at: number;
    updated_at: number;
}

@Injectable({
    providedIn: 'root'
})
export class CommentsService {
    public parent: any = null;

    private model: any = {};
    private timers: any = {};
    private subjects: any = {};
    private observers: any = {};

    constructor(private http: CommsService) { }

    public init() {
        return;
    }

    /**
     * Get a list of comments matching the given fields
     * @param fields query fields for API
     */
    public list(fields: any = { offset: 0, limit: 500 }) {
        return new Promise<IComment[]>((resolve, reject) => {
            const url = `${this.parent.api_endpoint}/comment`;
            let query = ``;
            if (fields) {
                for (const k in fields) {
                    if (fields.hasOwnProperty(k)) {
                        if (!query) { query += '&'; }
                        query += `${k}=${fields[k]}`;
                    }
                }
            }
            const data: IComment[] = [];
            this.http.get(`${url}${query ? '?'  + query : ''}`).subscribe((resp: any) => {
                for (const item of resp.results) {
                    data.push(this.processComment(item));
                }
                this.processReplies(data);
            }, (err) => {
                reject(err);
            }, () => {
                resolve(data);
            });
        });
    }

    /**
     * Create new comment
     * @param comment New comment
     */
    public new(comment: IComment) {
        return new Promise((resolve, reject) => {
            const cmt = JSON.parse(JSON.stringify(comment));
            if (cmt.user) { delete cmt.user; }
            if (cmt.other) {
                const data = cmt.other;
                data.comment = cmt.description;
                cmt.description = JSON.stringify(data);
                delete cmt.other;
            }
            const url = `${this.parent.api_endpoint}/comment`;
            this.http.post(url, cmt).subscribe(
                () => null,
                (err) => { reject(err); },
                () => { resolve('Success'); },
            );
        });
    }

    /**
     * Post update to comment
     * @param id ID of comment
     * @param comment Updated comment
     */
    public update(id: string, comment: IComment) {
        return new Promise((resolve, reject) => {
            const cmt = JSON.parse(JSON.stringify(comment));
            if (cmt.user) { delete cmt.user; }
            if (cmt.other) {
                const data = cmt.other;
                data.comment = cmt.description;
                cmt.description = JSON.stringify(data);
                delete cmt.other;
            }
            const url = `${this.parent.api_endpoint}/comment/${id}`;
            this.http.put(url, cmt).subscribe(
                () => null,
                (err) => { reject(err); },
                () => { resolve('Success'); },
            );
        });
    }

    /**
     * Delete comment with given ID
     * @param id ID of comment
     */
    public delete(id: string) {
        return new Promise((resolve, reject) => {
            const url = `${this.parent.api_endpoint}/comment/${id}`;
            this.http.delete(url).subscribe(
                () => null,
                (err) => { reject(err); },
                () => { resolve('Success'); },
            );
        });
    }

    /**
     * Set like state to true for comment
     * @param id ID of comment
     * @param master_id ID of root comment
     */
    public like(id: string, master_id: string = '') {
        return new Promise((resolve, reject) => {
            const url = `${this.parent.api_endpoint}/comment/${id}/like`;
            let query = `name=${this.parent.Users.current().staff_code}`;
            if (master_id) {
                query += `&master_id=${master_id}`;
            }
            this.http.post(`${url}${query ? '?'  + query : ''}`, {}).subscribe(
                () => null,
                (err) => { reject(err); },
                () => { resolve('Success'); },
            );
        });
    }

    /**
     * Set like state to false for comment
     * @param id ID of comment
     * @param master_id ID of root comment
     */
    public dislike(id: string, master_id: string = '') {
        return new Promise((resolve, reject) => {
            const url = `${this.parent.api_endpoint}/comment/${id}/like`;
            let query = `name=${this.parent.Users.current().staff_code}`;
            if (master_id) {
                query += `&master_id=${master_id}`;
            }
            this.http.post(`${url}${query ? '?'  + query : ''}`, {}).subscribe(
                () => null,
                (err) => { reject(err); },
                () => { resolve('Success'); },
            );
        });
    }

    /**
     * Remove like/dislike state of comment
     * @param id ID of comment
     */
    public remove_vote(id: string) {
        return new Promise((resolve, reject) => {
            const url = `${this.parent.api_endpoint}/comment/${id}/like`;
            const query = `name=${this.parent.Users.current().staff_code}`;
            this.http.post(`${url}${query ? '?'  + query : ''}`, {}).subscribe(
                () => null,
                (err) => { reject(err); },
                () => { resolve('Success'); },
            );
        });
    }

    /**
     * Convert raw comment dat into local format
     * @param cmt Raw comment data
     * @return
     */
    private processComment(cmt: any): IComment {
        const comment: IComment = {
            id: cmt.id,
            channel_id: cmt.channel_id,
            user_id: cmt.user_id,
            user: null,
            master_id: cmt.master_id,
            reply_to_id: cmt.in_reply_to_id,
            replies: [],
            name: cmt.name,
            description: cmt.description,
            likes: cmt.likes,
            other: {},
            dislikes: cmt.dislikes,
            created_at: cmt.created_at,
            updated_at: cmt.updated_at,
        };
        if (comment.description[0] === '{') {
            comment.other = JSON.parse(comment.description);
            if (comment.other) {
                comment.description = comment.other.comment;
            }
        }
        comment.user = this.parent.Users.get(cmt.name);
        return comment;
    }

    /**
     * Link associated comments together
     * @param cmt_list Array of comments
     */
    private processReplies(cmt_list: IComment[]) {
        for (const i of cmt_list) {
            if (i.reply_to_id) {
                const id = i.reply_to_id;
                for (const cmt of cmt_list) {
                    if (cmt.id === id) {
                        cmt.replies.push(i);
                        break;
                    }
                }
            }
        }
    }
}
