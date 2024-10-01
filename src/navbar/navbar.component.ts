import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../app/icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
