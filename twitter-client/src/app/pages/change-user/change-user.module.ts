import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeUserRoutingModule } from './change-user-routing.module';
import { ChangeUserComponent } from './change-user.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChangeUserComponent],
  imports: [
    CommonModule,
    ChangeUserRoutingModule,
    NzInputModule,
    NzButtonModule,
    FormsModule
  ]
})
export class ChangeUserModule { }
