import { TitleCasePipe } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-modal",
	standalone: true,
	imports: [TitleCasePipe],
	templateUrl: "./modal.component.html",
	styleUrl: "./modal.component.scss",
})
export class ModalComponent {
	@Input() type: "date" | "time" | "currency" | undefined;

	@Output() closeModal = new EventEmitter<void>();

	close() {
		this.closeModal.emit();
	}
}
