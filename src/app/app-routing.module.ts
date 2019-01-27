import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NationalTrustComponent } from './national-trust/national-trust.component';
import { EnglishHeritageComponent } from './english-heritage/english-heritage.component';
import { HhaComponent } from './hha/hha.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NPropertyComponent } from './national-trust/n-property/n-property.component';
import { EPropertyComponent } from './english-heritage/e-property/e-property.component';
import { HPropertyComponent } from './hha/h-property/h-property.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'national-trust', component: NationalTrustComponent, children: [
    { path: ':id', component: NPropertyComponent }
  ] },
  { path: 'english-heritage', component: EnglishHeritageComponent, children: [
    { path: ':id', component: EPropertyComponent }
  ] },
  { path: 'hha', component: HhaComponent, children: [
    { path: ':id', component: HPropertyComponent }
  ] },
  { path: 'add-new', component: FormComponent },
  
  { path: '', redirectTo: '/not-found', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
