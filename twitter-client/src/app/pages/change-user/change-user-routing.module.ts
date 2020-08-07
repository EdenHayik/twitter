import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeUserComponent } from './change-user.component';

const routes: Routes = [{ path: '', component: ChangeUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeUserRoutingModule { }
