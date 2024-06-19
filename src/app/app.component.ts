import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {
  InvestmentResultsComponent,
  InvestmentResultsData
} from './investment-results/investment-results.component';
import { InvestmentDetails, UserInputComponent } from './user-input/user-input.component';
import { calculateInvestmentResults } from '../investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent]
})
export class AppComponent {
  investmentResults?: InvestmentResultsData[];

  handleClickCalculate(details: InvestmentDetails) {
    this.investmentResults = calculateInvestmentResults(details);
  }
}
