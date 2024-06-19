import { Component, inject, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

export interface InvestmentDetails {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  private investmentService = inject(InvestmentService);
  initialInvestmentInput = signal('');
  annualInvestmentInput = signal('');
  expectedReturnInput = signal('5');
  durationInput = signal('10');

  onPressCalculate() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: Number(this.initialInvestmentInput()),
      duration: Number(this.durationInput()),
      expectedReturn: Number(this.expectedReturnInput()),
      annualInvestment: Number(this.annualInvestmentInput())
    });
  }
}
