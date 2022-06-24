import { Component } from '@angular/core';
import { WELCOME } from '../../constants/common.constant';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public welcome = WELCOME;
}
