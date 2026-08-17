import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, Header],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
