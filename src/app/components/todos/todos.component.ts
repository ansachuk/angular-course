import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

enum Status {
	Done,
	Progress,
	Todo,
}

interface ITodo {
	title: string;
	description: string;
	status: Status;
	priority: 1 | 2 | 3 | 4 | 5;
	id: number;
}

@Component({
	selector: "app-todos",
	standalone: true,
	imports: [],
	templateUrl: "./todos.component.html",
	styleUrl: "./todos.component.scss",
})
export class TodosComponent {
	todos: Array<ITodo> = [
		{
			id: 1,
			title: "title",
			description: "description",
			status: Status.Todo,
			priority: 4,
		},
		{
			id: 2,
			title: "title2",
			description: "description2",
			status: Status.Todo,
			priority: 2,
		},
		{
			id: 3,
			title: "title",
			description: "description",
			status: Status.Todo,
			priority: 5,
		},
		{
			id: 4,
			title: "title2",
			description: "description2",
			status: Status.Todo,
			priority: 1,
		},
		{
			id: 5,
			title: "title",
			description: "description",
			status: Status.Todo,
			priority: 1,
		},
		{
			id: 6,
			title: "title2",
			description: "description2",
			status: Status.Todo,
			priority: 3,
		},
		{
			id: 7,
			title: "title2",
			description: "description2",
			status: Status.Todo,
			priority: 5,
		},
	];

	isModalOpen = false;

	form = new FormGroup({
		title: new FormControl("", Validators.required),
		description: new FormControl(""),
		status: new FormControl(Status.Todo, Validators.required),
		priority: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(5)]),
	});

	handleModal(value: boolean) {
		this.isModalOpen = value;
	}

	handleSubmit() {
		console.log(this.form.value);
	}

	get title() {
		return this.form.get("title");
	}

	get description() {
		return this.form.get("description");
	}

	get status() {
		return this.form.get("status");
	}

	get priority() {
		return this.form.get("priority");
	}
}
