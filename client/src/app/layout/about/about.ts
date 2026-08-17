import { Component, OnInit } from '@angular/core';
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
export class About implements OnInit{

  aboutData: IAboutAPI | null = null;
  error: string | null = null;
  loading = true;
  
  constructor(private _aboutService:AboutService){}

  ngOnInit(): void {
    this._aboutService.getInfo().subscribe({
      next: (data)=>{
        this.aboutData = data;
        this.loading = false;
      },
      error: (e)=>{
        this.error = "Failed to load about data";
        this.loading = false;
        console.log(e);
      }
      
    });
  }

}
