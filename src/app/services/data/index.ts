
import { UsersService } from './users.service';
import { CommentsService } from './comments.service';
import { AnalyticsService } from './analytics.service';

export const DATA_SERVICES: any[] = [
    AnalyticsService,
    CommentsService,
    UsersService
];
