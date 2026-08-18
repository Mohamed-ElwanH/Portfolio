import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Header } from './header/header';
import { EducationTimeline } from './education-timeline/education-timeline';
import { IEducationAPI } from '../../core/models/education.model';
import { EducationService } from '../../core/services/education-service';

@Component({
  selector: 'app-education',
  imports: [Header, EducationTimeline],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements OnInit {
  eduData: IEducationAPI[] | null = null;

  constructor(
    private _educationService: EducationService,
    private _cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this._educationService.getInfo().subscribe({
      next: (data) => {
        this.eduData = data;
        this._cdr.detectChanges();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
