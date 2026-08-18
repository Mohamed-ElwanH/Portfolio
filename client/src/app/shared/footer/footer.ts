import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AboutService } from '../../core/services/about-service';
import { IAboutAPI } from '../../core/models/about.model';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  aboutData: IAboutAPI | null = null;

  constructor(
    private _aboutService: AboutService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._aboutService.getInfo().subscribe({
      next: (data) => {
        ((this.aboutData = data), this._cdr.detectChanges());
      },
      error: (e) => console.log(e),
    });
  }
}
