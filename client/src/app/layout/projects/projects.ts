import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProjectsAPI } from '../../core/models/projects.models';
import { ProjectsService } from '../../core/services/projects-service';
import { Header } from './header/header';
import { ProjectGrid } from './project-grid/project-grid';

@Component({
  selector: 'app-layout-projects',
  imports: [Header, ProjectGrid],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projectsData: IProjectsAPI[] = [];

  constructor(
    private _projectsService: ProjectsService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._projectsService.getInfo().subscribe({
      next: (data) => {
        this.projectsData = data;
        this._cdr.detectChanges();
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}