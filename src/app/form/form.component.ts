import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormModel } from './FormModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formValue !: FormGroup;
  formModelObj: FormModel = new FormModel();
  api: any;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      FirstName: [''],
      LastName: [''],
      Email: [''],
      Phone: [''],
      Job: [''],
      Age: [''],
      City: [''],
      Gender: [''],
    })
  }

  postformlistDetail() {
    this.formModelObj.FirstName = this.formValue.value.FirstName;
    this.formModelObj.LastName = this.formValue.value.LastName;
    this.formModelObj.Email = this.formValue.value.Email;
    this.formModelObj.Phone = this.formValue.value.Phone;
    this.formModelObj.Job = this.formValue.value.Job;
    this.formModelObj.Age = this.formValue.value.Age;
    this.formModelObj.City = this.formValue.value.City;
    this.formModelObj.Gender = this.formValue.value.Gender;

    this.api.postFormlist(this.formModelObj)
      .subscribe((res: any) => {
        console.log(res);
        alert('add successfully');
        this.formValue.reset();

      }),
      (err: any) => {
        alert("wait");
      }
  }
}
