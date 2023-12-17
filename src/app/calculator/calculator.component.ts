import { Component } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  display: string = '';
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

  handleButtonClick(button: string) {
    if(this.display == 'Error'){
      this.resetCalculator();
    }
    if (button === '=') {
      // Evaluate the expression
      this.display = this.evaluateExpression(this.display);
    }
    else if (this.display == 'undefined'){
      this.resetCalculator;
    }
    else {
      // Append the button value to the current display
      this.display += button;
    }
  }
  evaluateExpression(expression: string): string {
    try {
      // Use eval for simplicity in this example, but it has security implications
      // In a real application, you should implement a safe expression parser/evaluator
      return eval(expression);
    } catch (error) {
      return 'Error';
    }
  }
  resetCalculator(){
    this.display="";
  }

}
