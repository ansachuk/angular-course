import { Component, NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MyCalculatorComponent } from "./my-calculator/my-calculator.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, MyCalculatorComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	public title = "ansachuk angular-course";
}
