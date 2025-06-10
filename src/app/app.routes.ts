import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {InquiryComponent} from "./inquiry/inquiry.component";
import {AddUpdateComponent} from "./addUpdateUser/addUpdateUser.component";

export const routes: Routes = [
  {
    path: 'inquiry',
    component: InquiryComponent
  },
  {
    path: 'insert',
    component: AddUpdateComponent
  },
  {
    path: 'insert/:id',
    component: AddUpdateComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
