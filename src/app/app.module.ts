import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { FormsModule } from '@angular/forms';
 import { CustomFormsModule } from 'ngx-custom-validators';

 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { SliderModule } from 'angular-image-slider';
 


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutHeaderComponent } from './about-us/about-header/about-header.component';
import { AboutSectionComponent } from './about-us/about-section/about-section.component';
import { ContactSectionComponent } from './contact/contact-section/contact-section.component';
import { HomeSectionComponent } from './home/home-section/home-section.component';
import { FloorcoatingComponent } from './floorcoating/floorcoating.component';
import { FlsComponent } from './fls/fls.component';




const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'floorcoating', component: FloorcoatingComponent },
  { path: 'fls', component: FlsComponent },
  { path: 'product', component: ProductComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductComponent,
    ContactComponent,
    AboutHeaderComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    HomeSectionComponent,
    FloorcoatingComponent,
    FlsComponent,
    

 

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot(appRoutes) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

