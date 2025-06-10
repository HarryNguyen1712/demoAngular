import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
@Component({
  selector: 'delete',
  templateUrl: './deleteUser.component.html',
  styleUrls: ['./deleteUser.component.css']
})
export class DeleteUserComponent implements OnChanges {
  @Input() id: number=0;
  @Output() delete = new EventEmitter<number>();
  @Output() cancel = new EventEmitter<number>();
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  deleteUser() {
    this.delete.emit(this.id);
  }
  cancelDelete() {
    this.cancel.emit(this.id);
  }
  hideDialog() {
    this.visibleChange.emit(false);
  }
}
