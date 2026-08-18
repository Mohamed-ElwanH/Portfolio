import { Component, Input } from '@angular/core';
import { IProjectsAPI } from '../../../core/models/projects.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-grid',
  imports: [CommonModule],
  templateUrl: './project-grid.html',
  styleUrl: './project-grid.css',
})

export class ProjectGrid {
    @Input() projectsData: IProjectsAPI[] | null = null;

}
