import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { CardModule } from 'primeng/card';
// Components 
import { AboutComponent } from '../about/about.component';
import { StaffSchedulingComponent } from '../staff-scheduling/staff-scheduling.component';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { GuardManagementComponent } from '../guard-management/guard-management.component';
import { SecurityFirmsComponent } from '../security-firms/security-firms.component';
import { CustomIncidentComponent } from '../custom-incident/custom-incident.component';
import { MonitoringPointsComponent } from '../monitoring-points/monitoring-points.component';
import { SiteSafetyComponent } from '../site-safety/site-safety.component';
import { SchedulingAndManagementComponent } from '../scheduling-and-management/scheduling-and-management.component';
import { SocialPageComponent } from '../social-page/social-page.component';
import { NewspaperComponent } from '../newspaper/newspaper.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ClientPageComponent } from '../client-page/client-page.component';
import { CarouselModule } from 'primeng/carousel';
import { BlogsComponent } from '../blogs/blogs.component';
import { ViewBlogComponent } from '../view-blog/view-blog.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { PricingPlansComponent } from '../pricing-plans/pricing-plans.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';
import { FaqComponent } from '../faq/faq.component';
import { SchedulingComponent } from '../scheduling/scheduling.component';
import { GeofenceComponent } from '../geofence/geofence.component';
import { ClockInOutComponent } from '../clock-in-out/clock-in-out.component';
import { CostAnalysisComponent } from '../cost-analysis/cost-analysis.component';
import { ChatSystemComponent } from '../chat-system/chat-system.component';
import { TaskManagementComponent } from '../task-management/task-management.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'view-blog', component: ViewBlogComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'pricing', component: PricingPlansComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'scheduling', component: SchedulingComponent},
  { path: 'geofence', component: GeofenceComponent},
  { path: 'clock-in', component: ClockInOutComponent},
  { path: 'cost-analysis', component: CostAnalysisComponent},
  { path: 'chat-system', component: ChatSystemComponent},
  { path: 'task-management', component: TaskManagementComponent},
];

@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent,
    StaffSchedulingComponent,
    HomeLayoutComponent,
    GuardManagementComponent,
    SecurityFirmsComponent,
    CustomIncidentComponent,
    MonitoringPointsComponent,
    SiteSafetyComponent,
    SchedulingAndManagementComponent,
    SocialPageComponent,
    NewspaperComponent,
    ClientPageComponent,
    BlogsComponent,
    ViewBlogComponent,
    ContactUsComponent,
    PricingPlansComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    FaqComponent,
    SchedulingComponent,
    GeofenceComponent,
    ClockInOutComponent,
    CostAnalysisComponent,
    ChatSystemComponent,
    TaskManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimengModule,
    MatMenuModule,
    CardModule,
    MaterialModule,
    CarouselModule
  ]
})
export class LandingModule { }
