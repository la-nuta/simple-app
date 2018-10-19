import { Component, OnInit } from '@angular/core';
import { ParentsService } from '../../../core/servises/parents.service';
import { IUser } from '../../../core/models/user.model';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.scss']
})
export class ParentTwoComponent implements OnInit {
  users: IUser[] = [
    {id: '1', name: 'John', city: 'Minsk'},
    {id: '2', name: 'Alan', city: 'Brest'},
    {id: '3', name: 'Mary', city: 'Milan'},
    {id: '4', name: 'Tom', city: 'Praha'},
    {id: '5', name: 'Helga', city: 'Vilnius'},
  ];

  constructor(private service: ParentsService) {
  }

  ngOnInit() {
    this.service.$user.subscribe((newUserData) => {
      if (newUserData) {
        const user = this.users.find(currentUser => currentUser.name === newUserData.name);
        user.city = newUserData.city;
      }
    });
  }

  sendNewUser(user: IUser) {
    this.service.$user.next({id: user.id, name: user.name, city: user.city});
  }

  trackByFn(index, item) {
    return item.id;
  }
}
