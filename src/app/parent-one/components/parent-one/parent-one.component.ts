import { Component, OnInit } from '@angular/core';
import { ParentsService } from '../../../core/servises/parents.service';
import { IUser } from '../../../core/models/user.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent implements OnInit {
  $user: Observable<IUser>;
  cities = ['Warshaw', 'Paris', 'Gomel'];
  form: FormGroup;

  constructor(private service: ParentsService,
              private fb: FormBuilder,
  ) {
    this.$user = this.service.$user;
  }

  ngOnInit() {
    this.form =
      this.fb.group({
        city: null
      });
  }

  onConfirmMoving(user) {
    this.service.$user.next(user);
  }
}
