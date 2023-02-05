import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CustomSliderComponent } from 'src/app/common/custom-slider/custom-slider.component';



@NgModule({
  declarations: [DashboardComponent,CustomSliderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SlickCarouselModule,
    
    
  ]
})
export class DashboardModule { }
