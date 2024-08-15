import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/']);
  }
}
