import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgxUmsatzBudgetComponent } from './ngx-chart/umsatz-budget/ngx-umsatz-budget.component';
import { UmsatzBudgetComponent } from './ng2-chart/umsatz-budget/umsatz-budget.component';

import { ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UmsatzBudgetComponent,
    NgxUmsatzBudgetComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot([
      {
        path: 'ngx-chart',
        component: NgxUmsatzBudgetComponent
      },
      {
        path: 'ng2-charts',
        component: UmsatzBudgetComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
