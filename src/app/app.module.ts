import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCalculatorComponent } from './components/add-calculator/add-calculator.component';
import { SubtractCalculatorComponent } from './components/subtract-calculator/subtract-calculator.component';
import { MultiplyCalculatorComponent } from './components/multiply-calculator/multiply-calculator.component';
import { SplitCalculatorComponent } from './components/split-calculator/split-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultCalculatorComponent } from './components/result-calculator/result-calculator.component';
import { ColorMatrixComponent } from './components/color-matrix/color-matrix.component';
import { ElementFocusDirective } from './directives/element-focus.directive';
import { CardComponent } from './components/card/card.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCalculatorComponent,
    SubtractCalculatorComponent,
    MultiplyCalculatorComponent,
    SplitCalculatorComponent,
    ResultCalculatorComponent,
    ColorMatrixComponent,
    ElementFocusDirective,
    CardComponent,
    ProductsComponent
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
