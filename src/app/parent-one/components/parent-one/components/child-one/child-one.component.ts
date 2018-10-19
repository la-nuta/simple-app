import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IUser } from '../../../../../core/models/user.model';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent {
  @Input() name: string;
  @Input() city: string;
  @Input() id: string;
  @Input() form: FormControl;
  @Input() cities: string[];
  @Output() confirm = new EventEmitter<IUser>();

  confirmMoving() {
    this.confirm.emit({
      id: this.id,
      name: this.name,
      city: this.form.value.city
    });
  }

}
