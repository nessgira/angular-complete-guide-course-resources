import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<{
    initialInvestment: number;
    annualInvestment: number;
    duration: number;
    expectedReturn: number;
  }>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment),
      annualInvestment: Number(this.enteredAnnualInvestment),
      duration: Number(this.enteredDuration),
      expectedReturn: Number(this.enteredExpectedReturn)
    });
  }
}
