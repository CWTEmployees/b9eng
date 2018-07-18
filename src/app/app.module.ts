import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './home/header/header.component';
import { SectionComponent } from './home/section/section.component';
import { FooterComponent } from './home/footer/footer.component';
import { TestComponent } from './test/test.component';


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
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
