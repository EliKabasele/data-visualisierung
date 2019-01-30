import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UmsatzBudgetComponent } from './components/umsatz-budget/umsatz-budget.component';

import { ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UmsatzBudgetComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
