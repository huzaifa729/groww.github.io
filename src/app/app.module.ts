import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { GoldComponent } from './gold/gold.component';
import { USStocksComponent } from './usstocks/usstocks.component';
import { FDsComponent } from './fds/fds.component';
import { StocksComponent } from './stocks/stocks.component';
import { MutualComponent } from './mutual/mutual.component';
import { HomeComponent } from './jion/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DabirComponent } from './dabir/dabir.component';
import { PhotoComponent } from './photo/photo.component';
import { HelloComponent } from './hello/hello.component';
import { JokeComponent } from './joke/joke.component';

import { FooterComponent } from './footer/footer.component';


const appRoutes:Routes=[
  {path:'', component: MutualComponent},
  {path:'stocks', component: StocksComponent},
  {path:'gold', component: GoldComponent},
  {path:'usstocks', component: USStocksComponent},
  {path:'fds', component:FDsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    GoldComponent,
    USStocksComponent,
    FDsComponent,
    StocksComponent,
    MutualComponent,
    HomeComponent,
    DabirComponent,
    PhotoComponent,
    HelloComponent,
    JokeComponent,
 FooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
