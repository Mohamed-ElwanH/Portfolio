import { Component, Input } from '@angular/core';
import { IAboutAPI } from '../../../core/models/about.model';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  @Input() aboutData:IAboutAPI | null = null;
}
