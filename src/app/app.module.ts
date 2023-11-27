import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { HouseComponent } from './house/house.component';
import { MatInputModule } from '@angular/material/input';
import { CarComponent } from './car/car.component';
import { MatSelectModule } from '@angular/material/select';
import { MotorbikeComponent } from './motorbike/motorbike.component';
import { BusrailComponent } from './busrail/busrail.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, HouseComponent, CarComponent, MotorbikeComponent, BusrailComponent, SecondaryComponent, ResultsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
