import { Component } from "@angular/core";
import { NgClass } from "@angular/common";

import { ContainerComponent } from "../container/container.component";
import { ModalComponent } from "../modal/modal.component";

@Component({
	selector: "app-main",
	standalone: true,
	imports: [ContainerComponent, NgClass, ModalComponent],
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
