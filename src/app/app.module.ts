import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCalculatorComponent } from './components/add-calculator/add-calculator.component';
import { SubtractCalculatorComponent } from './components/subtract-calculator/subtract-calculator.component';
import { MultiplyCalculatorComponent } from './components/multiply-calculator/multiply-calculator.component';
import { SplitCalculatorComponent } from './components/split-calculator/split-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCalculatorComponent,
    SubtractCalculatorComponent,
    MultiplyCalculatorComponent,
    SplitCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
