import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EducationService } from '../../core/services/education-service';

@Component({
  selector: 'app-education',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements OnInit{
  form!:FormGroup;
  status:string = '';
  constructor(private _educationService:EducationService){}
  ngOnInit():void{
    this.form = new FormGroup({
      degrees: new FormArray([])
    });
    this._educationService.getInfo().subscribe((data)=>{
      if(data && data.length>0){
        data.forEach((degree)=>{
          this.degrees.push(this.createDegreeFormGroup(degree));
        });
      }else{
        this.addEntry();
      }
    })
  }
  private createDegreeFormGroup(data?: any): FormGroup{
    const newDegree:FormGroup = new FormGroup({
      degree: new FormControl(data?.degree ||'', [Validators.required]),
      school: new FormControl(data?.school ||'', [Validators.required]),
      date: new FormControl(data?.date ||'', [Validators.required]),
      desc: new FormControl(data?.desc ||'', [Validators.required]),
    })
    return newDegree;
  }

  addEntry():void{
    this.degrees.push(this.createDegreeFormGroup());
  }
  removeEntry(id:number){
    this.degrees.removeAt(id);
  }
  get degrees(): FormArray{
    return this.form.get('degrees') as FormArray;
  }
    onSubmit(){
      if(this.form.invalid){
        this.status = 'Failed';
        return;
      }

      const allDegreesData = this.degrees.value;
      this._educationService.addInfo(allDegreesData).subscribe({
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
