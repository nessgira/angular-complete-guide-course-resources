import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {
  onCalculateInvestmentResults(investmentData: {
    initialInvestment: number;
    annualInvestment: number;
    duration: number;
    expectedReturn: number;
  }) {
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

    console.log(annualData);
  }
}
