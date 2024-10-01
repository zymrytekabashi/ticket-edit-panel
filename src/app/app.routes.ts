import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ActivityComponent } from './activity/activity.component';
import { CommentsComponent } from './comments/comments.component';
import { AttachmentsComponent } from './attachments/attachments.component';

export const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'attachments', component: AttachmentsComponent },
  { path: '', redirectTo: '/details', pathMatch: 'full' },
];
