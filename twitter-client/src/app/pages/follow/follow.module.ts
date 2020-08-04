import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowRoutingModule } from './follow-routing.module';
import { FollowComponent } from './follow.component';
import { FollowCardComponent } from './follow-card/follow-card.component';
import { FollowGridComponent } from './follow-grid/follow-grid.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [FollowComponent, FollowCardComponent, FollowGridComponent],
  imports: [
    CommonModule,
    FollowRoutingModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    NzGridModule
  ]
})
export class FollowModule { }
