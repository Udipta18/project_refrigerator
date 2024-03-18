import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fixed-side-nav',
  standalone: true,
  imports:[FontAwesomeModule],
  templateUrl: './fixed-side-nav.component.html',
  styleUrl: './fixed-side-nav.component.scss'
})
export class FixedSideNavComponent {
  faPhone=faPhone;
}
