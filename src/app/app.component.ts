import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, route: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');
        route.navigateByUrl(returnUrl);
      }
    });
  }

}

