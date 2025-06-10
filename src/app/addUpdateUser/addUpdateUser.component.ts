import {Component, OnInit} from "@angular/core";
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyEnum} from "../enum/company.enum";
@Component({
  selector: 'insert-update',
  templateUrl: './addUpdateUser.component.html',
  styleUrls: ['./addUpdateUser.component.css']
})
export class AddUpdateComponent implements OnInit {
  id: number | undefined;
  form: FormGroup;
   companyEnum;
  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute
  ) {
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

  }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id != null ) {
        this.id = parseInt(id);
        const user = this.userService.getUsers().find(user => user.id === this.id);
        if (user) {
          this.form.patchValue(user);
        }
      }
  }
  onSubmit () {
    if (this.id != null) {
      this.form.value['id'] = this.id;
      this.userService.updateUser(this.form.value);
    } else {
      this.userService.addUser(this.form.value);
    }
    this.router.navigate(['/inquiry']);
  }
}
