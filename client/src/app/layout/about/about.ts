import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { ContactForm } from './contact-form/contact-form';
import { IAboutAPI } from '../../core/models/about.model';
import { AboutService } from '../../core/services/about-service';

@Component({
  selector: 'app-about',
  imports: [HeroSection, ContactForm],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  aboutData: IAboutAPI | null = null;

  constructor(
    private _aboutService: AboutService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._aboutService.getInfo().subscribe({
      next: (data) => {
        this.aboutData = data;
        this._cdr.detectChanges();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
