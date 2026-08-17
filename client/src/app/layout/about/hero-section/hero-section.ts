import { Component, Input } from '@angular/core';
import { IAboutAPI } from '../../../core/models/about.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  @Input() aboutData: IAboutAPI | null = null;
}
