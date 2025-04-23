import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApodComponent } from "./presentation/components/apod/apod.component";
import { HeaderComponent } from "./presentation/components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nasa-api';
}
