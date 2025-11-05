import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  resultsData?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

  onCalculateInvestmentResults(investmentData: InvestmentInput) {
    const annualData = [];
    let investmentValue = investmentData.initialInvestment;

    for (let i = 0; i < investmentData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investmentData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investmentData.annualInvestment;
      const totalInterest =
        investmentValue -
        investmentData.annualInvestment * year -
        investmentData.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investmentData.initialInvestment +
          investmentData.annualInvestment * year,
      });
    }

    this.resultsData = annualData;
  }
}
