
import { Injectable } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { BaseAPIService } from './base.service';
import { ApplicationService } from '../app.service';

export interface IComment {
    id: string;
    channel_id: string;
    user_id: string;    // ACA User ID
    user: PlaceUser;
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
export class BackofficeCommentsService extends BaseAPIService<IComment> {

    constructor(private _service: ApplicationService) {
        super(undefined);
        const sub = this._service.initialised.subscribe((state) => {
            if (state) {
                this.http = this._composer.http;
                sub.unsubscribe();
            }
        });
    }

    /**
     * Task for adding the like state to comment
     * @param id ID of the comment to like
     * @param fields Query parameters
     */
    public like(id: string, fields?: { name: string, [fields: string]: any }) {
        return this.task(id, 'like', fields);
    }

    /**
     * Task for removing like state on the comment
     * @param id ID of the comment to dislike
     * @param fields Query parameters
     */
    public dislike(id: string, fields?: { name: string, [fields: string]: any }) {
        return this.task(id, 'dislike', fields);
    }

    /**
     * Task for removing like state on the comment
     * @param id ID of the comment to dislike
     * @param fields Query parameters
     */
    public removeVote(id: string, fields?: { name: string, [fields: string]: any }) {
        return this.task(id, 'clear', fields);
    }

    /**
     * Process list data for returned items
     * @param list Raw item data from server
     */
    protected processList(list: any[]) {
        const output_list = list.map(i => this.process(i));
        this.processReplies(output_list);
        return output_list;
    }

    /**
     * Convert raw comment dat into local format
     * @param cmt Raw comment data
     */
    protected process(cmt: any): IComment {
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
        this.parent.Users.query({ q: cmt.name }).then((list) => {
            comment.user = list[0] || new PlaceUser(cmt);
        }, (err) => comment.user = new PlaceUser(cmt));
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
