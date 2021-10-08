import { getUnixTime } from 'date-fns';

export class PlaceAPIKeyDetails {
    public readonly id: string;
    public readonly name: string;
    public readonly user_id: string;
    public readonly authority_id: string;
    public readonly description: string;
    public readonly scopes: string[];
    public readonly permissions: null | 'user' | 'support' | 'admin';
    public readonly created_at: number;
    public readonly updated_at: number;
    public readonly secret?: string;
    public readonly x_api_key?: string;

    constructor(_data: Partial<PlaceAPIKeyDetails>) {
        this.id = _data.id || '';
        this.name = _data.name || '';
        this.user_id = _data.user_id || '';
        this.authority_id = _data.authority_id || '';
        this.description = _data.description || '';
        this.permissions = _data.permissions || 'user';
        this.created_at = _data.created_at || getUnixTime(new Date());
        this.updated_at = _data.updated_at || getUnixTime(new Date());
        this.secret = _data.secret;
        this.x_api_key = _data.x_api_key || '';
        this.scopes = _data.scopes || [];
    }
}
