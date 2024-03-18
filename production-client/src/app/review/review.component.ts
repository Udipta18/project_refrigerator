import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review',
  standalone: true,
  imports:[FontAwesomeModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ReviewComponent {
  faPhone=faPhone;
}
