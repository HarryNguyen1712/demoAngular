import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {InquiryComponent} from "./inquiry/inquiry.component";
import {TableModule} from "primeng/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app.routes";
import {AppComponent} from "./app.component";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputTextModule} from "primeng/inputtext";
import {MessageModule} from "primeng/message";
import {ButtonDirective} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {AddUpdateComponent} from "./addUpdateUser/addUpdateUser.component";
import {DropdownModule} from "primeng/dropdown";
import {UpdateUserDialogComponent} from "./updateuserdialog/updateUserDialog.component";
import {DialogModule} from "primeng/dialog";
import {DeleteUserComponent} from "./deleteUser/deleteUser.component";
import {CardModule} from "primeng/card";
@NgModule({
  declarations: [AppComponent, InquiryComponent, AddUpdateComponent, UpdateUserDialogComponent, DeleteUserComponent],
  imports: [BrowserModule,
    TableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule, InputGroupModule, InputGroupAddonModule, InputTextModule, MessageModule, ButtonModule, PasswordModule, CalendarModule, DropdownModule, DialogModule, CardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
