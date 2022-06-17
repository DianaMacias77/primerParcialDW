import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { trigger, state, style, animate, transition,query, animateChild} from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
    trigger('easeInOut', [
      transition('void => *', [
          style({
              opacity: 0
          }),
          animate("500ms ease-in", style({
              opacity: 1
          }))
      ]),
      transition('* => void', [
          style({
              opacity: 1
          }),
          animate("500ms ease-in", style({
              opacity: 0
          }))
        ])
      ])
  ]

})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  show:boolean = true;
  toggle() {
    this.show = !this.show;
  }

}
