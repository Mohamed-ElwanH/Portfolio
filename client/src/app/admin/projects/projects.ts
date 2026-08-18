import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectsService } from '../../core/services/projects-service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit{
  form!:FormGroup;
  status:string = '';
  constructor(private _projectsService:ProjectsService){}
  ngOnInit():void{
    this.form = new FormGroup({
      projects: new FormArray([])
    });
    this._projectsService.getInfo().subscribe((data)=>{
      if(data && data.length>0){
        data.forEach((project)=>{
          this.projects.push(this.createProjectFormGroup(project));
        });
      }else{
        this.addEntry();
      }
    })
  }
private createProjectFormGroup(data?: any): FormGroup {
  const newProject: FormGroup = new FormGroup({
    title: new FormControl(data?.title || '', [Validators.required]),
    meta: new FormControl(data?.meta || '', [Validators.required]),
    tags: new FormControl(data?.tags || '', [Validators.required]),
    img: new FormControl(data?.img || '', [Validators.required]),
    liveLink: new FormControl(data?.liveLink || '', [Validators.required]),
    repoLink: new FormControl(data?.repoLink || '', [Validators.required]),
    desc: new FormControl(data?.desc || '', [Validators.required]),
  });
  return newProject;
}

  addEntry():void{
    this.projects.push(this.createProjectFormGroup());
  }
  removeEntry(id:number){
    this.projects.removeAt(id);
  }
  get projects(): FormArray{
    return this.form.get('projects') as FormArray;
  }
    onSubmit(): void{
      if(this.form.invalid){
        this.status = 'Failed';
        return;
      }

      const allProjectsData = this.projects.value;
      this._projectsService.addInfo(allProjectsData).subscribe({
        next: (data)=>{
          this.status = 'Success';
        },
        error: e=>{
          this.status = 'Failed';
          console.log(e);
        }

      })
    }

}
