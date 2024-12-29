import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
// import { RouterOutlet } from '@angular/router';

@Component({
	selector: "app-root",
	standalone: true,
	imports: [HeaderComponent, MainComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {}
