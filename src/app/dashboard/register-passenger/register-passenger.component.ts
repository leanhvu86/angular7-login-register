import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProvinceService } from 'src/app/shared/service/province.service';
import { Province } from 'src/app/shared/model/province';
import { Passenger } from 'src/app/shared/model/passenger';

@Component({
  selector: 'app-register-passenger',
  templateUrl: './register-passenger.component.html',
  styleUrls: ['./register-passenger.component.css']
})

export class RegisterPassengerComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  provinces: Province[] = [];
  passenger = new Passenger();
  constructor(private formBuilder: FormBuilder, private provinceService: ProvinceService) { }
  public show: boolean = false;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      province: ['', Validators.required],
      firstName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required]],
      idNo: ['', Validators.required],
      typeOfPassenger: [''],
      education: [''],
      agree: [false, Validators.requiredTrue]
    });
    this.getProvinceArray();
  }
  get f() { return this.registerForm.controls; }
  myDropDown: string;

  onChangeofOptions(value: any) {
    console.log(value);
    if (value === 'Student') {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.passenger = this.registerForm.value;
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.passenger, null, 4));
    }

    // display form values on success

  }
  getProvinceArray() {
    this.provinceService.getProvinces().subscribe(provinces => {
      this.provinces = provinces;
      console.log('province' + this.provinces);

    })
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  itemList = ['carrot', 'banana', 'apple', 'potato', 'tomato', 'cabbage', 'turnip', 'okra', 'onion', 'cherries', 'plum', 'mango'];
}