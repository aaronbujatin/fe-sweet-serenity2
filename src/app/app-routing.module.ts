import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PackageOffersComponent } from './components/package-offers/package-offers.component';
import { DiamondComponent } from './components/packages/diamond/diamond.component';
import { EmeraldComponent } from './components/packages/emerald/emerald.component';
import { GoldComponent } from './components/packages/gold/gold.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: "Sweet Serenity" },
  { path: 'contact', component: ContactComponent, title: "Sweet Serenity | Contact" },
  { path: 'about', component: AboutComponent, title: "Sweet Serenity | About" },
  { path: 'gallery', component: GalleryComponent, title: "Sweet Serenity | Gallery" },
  { path: 'package-offers', component: PackageOffersComponent, title: "Sweet Serenity | Packge Offers" },
  { path: 'package-gold', component: GoldComponent, title: "Sweet Serenity | Package Gold" },
  { path: 'package-emerald', component: EmeraldComponent, title: "Sweet Serenity | package Emerald" },
  { path: 'package-diamond', component: DiamondComponent, title: "Sweet Serenity | Package Diamond" }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
