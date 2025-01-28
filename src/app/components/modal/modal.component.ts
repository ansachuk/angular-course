import { DatePipe, TitleCasePipe, CurrencyPipe } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-modal",
	standalone: true,
	imports: [TitleCasePipe, DatePipe, CurrencyPipe],
	templateUrl: "./modal.component.html",
	styleUrl: "./modal.component.scss",
})
export class ModalComponent {
	@Input() type: "date" | "time" | "currency" | undefined;

	@Output() closeModal = new EventEmitter<void>();

	now = new Date();

	close() {
		this.closeModal.emit();
	}
}
