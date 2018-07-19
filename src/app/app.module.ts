import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutHeaderComponent } from './about-us/about-header/about-header.component';
import { AboutSectionComponent } from './about-us/about-section/about-section.component';
import { ContactSectionComponent } from './contact/contact-section/contact-section.component';
import { ServiceSectionComponent } from './services/service-section/service-section.component';
import { HomeSectionComponent } from './home/home-section/home-section.component';








const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ProductComponent,
    ContactComponent,
    AboutHeaderComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    ServiceSectionComponent,
    HomeSectionComponent,
    

 

    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
