import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { GridComponent } from './components/grid/grid.component';
import { MapComponent } from './components/map/map.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const appRoutes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'thank-you', component: ThankYouComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    GridComponent,
    MapComponent,
    ContactFormComponent,
    FooterComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
