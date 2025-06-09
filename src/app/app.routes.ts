import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {InquiryComponent} from "./inquiry/inquiry.component";

export const routes: Routes = [
  {
    path: 'inquiry',
    component: InquiryComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
