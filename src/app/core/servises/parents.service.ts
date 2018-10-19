import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {
  private defaultUser: IUser = {
    id: '1',
    name: 'John',
    city: 'Minsk'
  };
  $user = new BehaviorSubject<IUser>(this.defaultUser);

}
