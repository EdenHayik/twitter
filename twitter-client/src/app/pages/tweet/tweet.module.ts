import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetRoutingModule } from './tweet-routing.module';
import { TweetComponent } from './tweet.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { TweetGridComponent } from './tweet-grid/tweet-grid.component';
import { TweetCreateComponent } from './tweet-create/tweet-create.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [TweetComponent, TweetCardComponent, TweetGridComponent, TweetCreateComponent],
  imports: [
    CommonModule,
    TweetRoutingModule,
    NzIconModule,
    NzCardModule,
    NzAvatarModule,
    NzGridModule,
    NzInputModule,
    FormsModule,
    NzButtonModule
  ]
})
export class TweetModule { }
