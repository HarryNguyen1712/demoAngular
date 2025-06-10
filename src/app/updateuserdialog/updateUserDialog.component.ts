import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from "@angular/core";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyEnum} from "../enum/company.enum";

@Component({
  selector: 'update-user-dialog',
  templateUrl: './updateUserDialog.component.html',
  styleUrls: ['./updateUserDialog.component.css']
})
export class UpdateUserDialogComponent implements OnChanges {
  @Input() visible: boolean = false;
  @Input() user: {
    id: number,
    name: string,
    age: number,
    address: string,
    company: string,
    birthDate: string
  } | undefined;
  form: FormGroup;
  companyEnum;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<{
    id: number;
    name: string;
    age: number;
    address: string;
    company: string;
    birthDate: string
  }>();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      address: ['', Validators.required],
      company: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
    this.companyEnum = Object.keys(CompanyEnum)
      .filter(key => isNaN(Number(key)))
      .map(key => ({
        label: key,
        value: key
      }));
    console.log(this.user);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && this.user) {
      this.buildForm();
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: [this.user?.id],
      name: [this.user?.name, Validators.required],
      age: [this.user?.age, [Validators.required, Validators.min(0)]],
      address: [this.user?.address, Validators.required],
      company: [this.user?.company, Validators.required],
      birthDate: [this.user?.birthDate, Validators.required],
    });
  }

  onSubmit() {
    this.save.emit(this.form.value);
    this.visibleChange.emit(false);
  }

  hideDialog() {
    this.visibleChange.emit(false);
  }
}
