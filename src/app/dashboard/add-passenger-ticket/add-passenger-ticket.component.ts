import { Component, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';
import { Province } from 'src/app/shared/model/province';
import { ProvinceService } from 'src/app/shared/service/province.service';

@Component({
  selector: 'app-add-passenger-ticket',
  templateUrl: './add-passenger-ticket.component.html',
  styleUrls: ['./add-passenger-ticket.component.css']
})
export class AddPassengerTicketComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  constructor(private provinceService: ProvinceService, private cdr: ChangeDetectorRef) {

  }


  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Họ và tên',
      name: 'name',
      placeholder: 'Họ tên đầy đủ',
      validation: [Validators.required, Validators.minLength(4)]
    }, {
      type: 'input',
      label: 'Email',
      name: 'email',
      placeholder: 'Vui lòng điền email',
      validation: [Validators.required, Validators.minLength(4), Validators.email]
    },
    {
      type: 'input',
      label: 'Địa chỉ',
      name: 'address',
      placeholder: 'Địa chỉ cư trú',
      validation: [Validators.required, Validators.minLength(4), Validators.email]
    },
    {
      type: 'input',
      label: 'Ngày sinh',
      name: 'birthday',
      placeholder: 'dd/mm/yyyy',
      validation: [Validators.required, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]
    },

    // {
    //   label: 'Ảnh thẻ',
    //   name: 'upload',
    //   type: 'button'
    // },
    {
      type: 'input',
      label: 'Trường học',
      name: 'school',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Tên trường học hiện tại nếu có',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Tỉnh khai sinh',
      name: 'province',
      options: [],
      placeholder: 'Tỉnh khai sinh',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];
  ngOnInit(): void {
    console.log('run first');

  };
  ngAfterViewInit() {
    //this.getProvince();
    console.log('run second');
    this.getData();
  }

  async getData() {
    await this.provinceService.getProvinceArray();
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });
    this.form.setDisabled('submit', true);
    //this.form.setValue('name', 'Todd Motto');
    this.cdr.detectChanges();
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}

