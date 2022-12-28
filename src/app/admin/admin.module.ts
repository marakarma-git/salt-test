import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { ActivityComponent } from './activity/activity.component';
import { SocialComponent } from './social/social.component';
import { ChannelComponent } from './channel/channel.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminfooterComponent } from './partials/adminfooter/adminfooter.component';
import { AdminheaderComponent } from './partials/adminheader/adminheader.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'activity',
        component: ActivityComponent,
      },
      {
        path: 'social',
        component: SocialComponent,
      },
      {
        path: 'channel',
        component: ChannelComponent,
      }
    ]
  }
]


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    ActivityComponent,
    SocialComponent,
    ChannelComponent,
    AdminfooterComponent,
    AdminheaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
