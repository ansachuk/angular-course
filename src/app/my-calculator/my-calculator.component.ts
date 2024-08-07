import { Component, NgModule } from "@angular/core";

@Component({
	selector: "app-my-calculator",
	standalone: true,
	imports: [],
	// templateUrl: "./my-calculator.component.html",
	template: `
		<div class="calculator">
			<input type="number" class="calc_input" [(ngModel)]="first" />
			<select>
				@for (operation of operations; track operation) {
				<option [value]="operation">{{ operation }}</option>
				}
			</select>
			<input type="number" class="calc_input" />

			<span class="result">{{ result ? result : "Press calculate" }}</span>
			<button (click)="calc()">Calculate</button>
		</div>
	`,
	styleUrl: "./my-calculator.component.scss",
})
export class MyCalculatorComponent {
	public first: number = 1;
	public second: number = 1;
	public operation: string = "+";

	public operations: string[] = ["+", "-", "/", "*"];

	public result?: number;

	public calc() {
		switch (this.operation) {
			case "+":
				this.result = this.first + this.second;
				console.log("this.result", this.result);
				break;
			case "-":
				this.result = this.first - this.second;
				break;
			case "/":
				this.result = this.first / this.second;
				break;
			case "*":
				this.result = this.first * this.second;
				break;

			default:
				break;
		}
	}
}
