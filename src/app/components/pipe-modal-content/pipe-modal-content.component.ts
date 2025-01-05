import { Component, Input } from "@angular/core";
import { DatePipe, CurrencyPipe } from "@angular/common";

@Component({
	selector: "app-pipe-modal-content",
	standalone: true,
	imports: [DatePipe, CurrencyPipe],
	templateUrl: "./pipe-modal-content.component.html",
	styleUrl: "./pipe-modal-content.component.scss",
})
export class PipeModalContentComponent {
	@Input() type: "date" | "time" | "currency" | undefined;

	now = new Date();
}
