import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formValue !: FormGroup
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group ({
      FirstName : [''],
      LastName : [''],
      Email : [''],
      Phone : [''],
      Job : [''],
      Age : [''],
      City : [''],
      Gender : [''],
    })
  }

}
