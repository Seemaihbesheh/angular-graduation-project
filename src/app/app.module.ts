import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';


import { FormsModule } from '@angular/forms';
//import { from } from 'rxjs';


import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CvPageComponent } from './layout/cv-page/cv-page.component';
import { PdffComponent } from './pdff/pdff.component';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        LanguageTranslationModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
   
    


    ],

   
  //  declarations: [AppComponent, SemComponent, TesttttttestttttComponent, CvvCreateComponent],
  declarations: [
    AppComponent,
    PdffComponent, 

],
    providers:[
        AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
