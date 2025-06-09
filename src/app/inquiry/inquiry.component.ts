import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      address: [null, Validators.required],
      company: [null, Validators.required],
      birthDate: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'a@example.com' },
    { id: 2, name: 'Trần Thị B', email: 'b@example.com' },
    { id: 3, name: 'Lê Văn C', email: 'c@example.com' },
  ];
  form: FormGroup;

  onSubmit() {
    console.log(this.form.value);
  }
}
