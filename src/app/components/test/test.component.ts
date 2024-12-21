import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-test",
	standalone: true,
	templateUrl: "./test.component.html",
	styleUrl: "./test.component.scss",
	imports: [FormsModule],
})
export class TestComponent {
	name = "Test";

	@Input() inputData: string = "yo";

	@Output() testOutputEmmiter = new EventEmitter<string>();

	handleSendData = () => {
		this.name = (Math.random() * 10000).toFixed();
		this.testOutputEmmiter.emit("YEAH!");
	};
}
