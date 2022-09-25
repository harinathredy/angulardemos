import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  formValue !: FormGroup;
  EmployeeModelObj : EmployeeModel = new EmployeeModel();
  constructor(private formbuilder: FormBuilder,
     private api : ApiService) { }


  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
    })
  }

  postEmployeeDetails(){
    this.EmployeeModelObj.firstName = this.formValue.value.firstName;
    this.EmployeeModelObj.lastName = this.formValue.value.lastName;
    this.EmployeeModelObj.email = this.formValue.value.email;

    this.api.postEmploye(this.EmployeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Added Sucessfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
    },
    err=>{
   alert("something went wrong");
    })
  }

  }

