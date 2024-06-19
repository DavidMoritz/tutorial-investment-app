import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface InvestmentDetails {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentDetails>();
  initialInvestmentInput = signal('');
  annualInvestmentInput = signal('');
  expectedReturnInput = signal('');
  durationInput = signal('');

  onPressCalculate() {
    this.calculate.emit({
      initialInvestment: Number(this.initialInvestmentInput()),
      duration: Number(this.durationInput()),
      expectedReturn: Number(this.expectedReturnInput()),
      annualInvestment: Number(this.annualInvestmentInput())
    });
  }
}
