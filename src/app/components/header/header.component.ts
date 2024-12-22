import { Component } from "@angular/core";
import { ContainerComponent } from "../container/container.component";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [ContainerComponent],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	links = [
		{
			label: "Home",
			route: "/",
		},
		{
			label: "About",
			route: "/about",
		},
		{
			label: "Contact",
			route: "/contact",
		},
		{
			label: "Blog",
			route: "/blog",
		},
	];
}
