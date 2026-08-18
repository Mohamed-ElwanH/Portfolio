import { Component, Input } from '@angular/core';
import { IEducationAPI } from '../../../core/models/education.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-timeline',
  imports: [CommonModule],
  templateUrl: './education-timeline.html',
  styleUrl: './education-timeline.css',
})
export class EducationTimeline {
  @Input() eduData: IEducationAPI[] | null = null;
}
