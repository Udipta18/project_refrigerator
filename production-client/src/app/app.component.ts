import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardBodyComponent } from './card-body/card-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'production-client';
}
