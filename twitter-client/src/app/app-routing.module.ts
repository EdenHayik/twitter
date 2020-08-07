import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/tweet' },
  { path: 'tweet', loadChildren: () => import('./pages/tweet/tweet.module').then(m => m.TweetModule) },
  { path: 'follow', loadChildren: () => import('./pages/follow/follow.module').then(m => m.FollowModule) },
  { path: 'ChangeUser', loadChildren: () => import('./pages/change-user/change-user.module').then(m => m.ChangeUserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
