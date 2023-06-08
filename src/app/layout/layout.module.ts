import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from '../shared/primeng.module';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/pages/landing/landing.module').then(
            (m) => m.LandingModule
          ),
      },
    
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimengModule,
    CardModule,
    FormsModule,
    MatMenuModule

  ]
})
export class LayoutModule { }
