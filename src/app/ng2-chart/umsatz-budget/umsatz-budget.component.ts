import { Component, OnInit } from '@angular/core';
import {
  BUDGET_LABEL,
  JAHR_BUDGET,
  JAHR_UMSAETZE,
  MAX,
  MONTHS,
  STEP_VALUE,
  STEPS,
  UMSATZ_LABEL
} from '../../chartData/chartData_Jahr';
import {QUARTAL_BUDGET, QUARTAL_UMSAETZE, QUARTALS} from '../../chartData/chartData_Quartal';
import {DAYS, MONTH_BUDGET, MONTH_UMSAETZE} from '../../chartData/chartData_Month';
import {WEEK_BUDGET, WEEK_DAYS, WEEK_UMSAETZE} from '../../chartData/chartData_Woche';

@Component({
  selector: 'app-umsatz-budget',
  templateUrl: './umsatz-budget.component.html',
  styleUrls: ['./umsatz-budget.component.css']
})
export class UmsatzBudgetComponent implements OnInit {

  public selectedTab: string;

  // ---- Jahr Data -------------------------
  jahrChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          steps : STEPS,
          stepValue : STEP_VALUE,
          max : MAX,
        }
      }]
    },
  };
  jahrChartDaten = [
    {
      data: JAHR_UMSAETZE,
      label: UMSATZ_LABEL,
      fill: false,
      lineTension: 0},
    {
      data: JAHR_BUDGET,
      label: BUDGET_LABEL,
      fill: false,
      lineTension: 0},
  ];
  jahrChartLabels = MONTHS;

  // ---- Quartal Data -------------------------
  quartalChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          steps : STEPS,
          stepValue : STEP_VALUE,
          max : MAX,
        }
      }]
    },
  };
  quartalChartDaten = [
    {
      data: QUARTAL_UMSAETZE,
      label: UMSATZ_LABEL,
      fill: false,
      lineTension: 0},
    {
      data: QUARTAL_BUDGET,
      label: BUDGET_LABEL,
      fill: false,
      lineTension: 0},
  ];
  quartalChartLabels = QUARTALS;

  // ---- Month Data -------------------------
  monthChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          steps : STEPS,
          stepValue : STEP_VALUE,
          max : MAX,
        }
      }]
    },
  };
  monthChartDaten = [
    {
      data: MONTH_UMSAETZE,
      label: UMSATZ_LABEL,
      fill: false,
      lineTension: 0},
    {
      data: MONTH_BUDGET,
      label: BUDGET_LABEL,
      fill: false,
      lineTension: 0},
  ];
  monthChartLabels = DAYS;

  // ---- Week Data -------------------------
  chartType = 'bar';
  weekChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          steps : STEPS,
          stepValue : STEP_VALUE,
          max : MAX,
        }
      }]
    },
  };
  weekChartDaten = [
    {
      data: WEEK_UMSAETZE,
      label: UMSATZ_LABEL,
      fill: false,
      lineTension: 0,
      type: 'line'
    },
    {
      data: WEEK_BUDGET,
      label: BUDGET_LABEL,
      fill: false,
      lineTension: 0,
    },
  ];
  weekChartLabels = WEEK_DAYS;

  onChartHover(event) {
    console.log(event);
  }
  activeTab(a: string) {
    this.selectedTab = a;
  }

  constructor() {
    this.selectedTab = 'year';
  }

  ngOnInit() {
  }


}
