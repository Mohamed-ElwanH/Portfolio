import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { UrlValidator } from '../../core/validators/url.validator';
import { AboutService } from '../../core/services/about-service';

@Component({
  selector: 'app-about',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit{
  form!:FormGroup;
  status = '';
  constructor(private _aboutService: AboutService){}
  ngOnInit(): void {
    this.form= new FormGroup({
      fullName:new FormControl('', [Validators.required, Validators.minLength(6)]),
      title:new FormControl('', [Validators.required]),
      location:new FormControl('', [Validators.required]),
      availability:new FormControl('', [Validators.required]),
      publicEmail:new FormControl('', [Validators.required, Validators.email]),
      shortBio:new FormControl('', [Validators.required]),
      longBio:new FormControl(''),
      githubURL:new FormControl('', [UrlValidator.ValidUrl()]),
      linkedinURL:new FormControl('', [UrlValidator.ValidUrl()])

    });
    this._aboutService.getInfo().subscribe((data)=>{
      if(data){
        this.form.patchValue(data);
      }
    })
  }
  onSubmit(){
    let formData = new FormData();
    //<photo>
    formData.append('fullName', this.form.get('fullName')?.value as string);
    formData.append('title', this.form.get('title')?.value as string);
    formData.append('location', this.form.get('location')?.value as string);
    formData.append('availability', this.form.get('availability')?.value as string);
    formData.append('email', this.form.get('publicEmail')?.value as string);
    formData.append('shortBio', this.form.get('shortBio')?.value as string);
    formData.append('longBio', this.form.get('longBio')?.value as string);
    formData.append('githubURL', this.form.get('githubURL')?.value as string);
    formData.append('linkedInURL', this.form.get('linkedinURL')?.value as string);

    this._aboutService.addInfo(formData).subscribe({
      next: (data)=>{
        this.status = 'Success';
      },
      error:err=>{
        this.status = 'Failed';
        console.log(err);
      }
    })

  }
}
