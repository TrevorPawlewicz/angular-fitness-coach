import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { FlexLayoutModule }         from '@angular/flex-layout';
import { MaterialModule }           from './material.module'; // our imports module for Material
import { AppComponent }             from './app.component';
import { SignupComponent }          from './auth/signup/signup.component';
import { LoginComponent }           from './auth/login/login.component';
import { TrainingComponent }        from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent }     from './training/new-training/new-training.component';
import { PastTrainingComponent }    from './training/past-training/past-training.component';
import { WelcomeComponent }         from './welcome/welcome.component';
import { AppRoutingModule }         from './app-routing.module'; // my routes
//-----------------------------------------------------------------------------

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LoginComponent,
        TrainingComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PastTrainingComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule, // my routes
        MaterialModule // trevs module for Material Design imports
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
