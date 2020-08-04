import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TweetComponent } from './tweet.component';

const routes: Routes = [{ path: '', component: TweetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TweetRoutingModule { }
