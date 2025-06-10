import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  users: { id: number, name: string, age: number, address: string, company: string, birthDate: string } [] = [];
  selectedUser: {
    id: number;
    name: string;
    age: number;
    address: string;
    company: string;
    birthDate: string
  } | undefined;
  displayDialog: boolean = false;
  formSearch: FormGroup;
  isLoaded: boolean = false;
  displayDialogDelete: boolean = false;
  selectedId: number = 0;

  constructor(private userService: UserService, private router: Router, private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) {
    this.formSearch = this.formBuilder.group({
      nameSearch: [''],
    })
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.isLoaded = false;
  }

  onSubmitSearch() {
    if (this.formSearch.valid) {
      this.users = this.userService.searchByUser(this.formSearch.value['nameSearch']);
      this.isLoaded = true;
    } else {
      this.formSearch.markAllAsTouched();
    }
  }

  updateUser(id: string) {
    this.router.navigate(['/insert/', id]);
  }

  openDialogDelete(id: number) {
    this.selectedId = id;
    this.displayDialogDelete = true;
  }

  openDialog(id: number) {
    this.selectedUser = this.userService.getUsers().find(user => user.id === id);
    this.displayDialog = true;
  }

  saveUser(user: { id: number; name: string; age: number; address: string; company: string; birthDate: string; }) {
    this.userService.updateUser(user);
    this.users = this.userService.getUsers();
  }

  deleteUser($event: number) {
    this.userService.deleteUser($event);
    this.users = this.userService.getUsers();
    this.displayDialogDelete = false;
  }

  cancel() {
    this.selectedId = 0;
    this.displayDialogDelete = false;
  }

  goToLink() {
    window.open("/insert");
  }
}
