import { Component } from "@angular/core";
import { NgClass } from "@angular/common";

import { ContainerComponent } from "../container/container.component";
import { ModalComponent } from "../modal/modal.component";
import { PipeModalContentComponent } from "../pipe-modal-content/pipe-modal-content.component";
import { TodosComponent } from "../todos/todos.component";

@Component({
	selector: "app-main",
	standalone: true,
	imports: [ContainerComponent, NgClass, ModalComponent, PipeModalContentComponent, TodosComponent],
	templateUrl: "./main.component.html",
	styleUrl: "./main.component.scss",
})
export class MainComponent {
	currentType: "date" | "time" | "currency" | undefined;

	modalTypes = [
		{ type: "date", color: "purple" },
		{ type: "time", color: "red" },
		{ type: "currency", color: "blue" },
	];

	openModal(type: string) {
		if (type !== "date" && type !== "time" && type !== "currency") return;

		this.currentType = type;
	}
}
