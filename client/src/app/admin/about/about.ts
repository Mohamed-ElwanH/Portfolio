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
      longBio:new FormControl('', [Validators.required]),
      githubURL:new FormControl('', [Validators.required,UrlValidator.ValidUrl()]),
      linkedInURL:new FormControl('', [Validators.required,UrlValidator.ValidUrl()])

    });
    this._aboutService.getInfo().subscribe((data)=>{
      if(data){
        this.form.patchValue(data);
      }
    })
  }
  onSubmit(){

    const payload = {
  fullName: this.form.get('fullName')?.value,
  title: this.form.get('title')?.value,
  location: this.form.get('location')?.value,
  availability: this.form.get('availability')?.value,
  email: this.form.get('publicEmail')?.value,
  shortBio: this.form.get('shortBio')?.value,
  longBio: this.form.get('longBio')?.value,
  githubURL: this.form.get('githubURL')?.value,
  linkedInURL: this.form.get('linkedInURL')?.value,
};

this._aboutService.addInfo(payload).subscribe({
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
