import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  constructor(private db: AngularFireDatabase) {
    // this.itemRef = db.object('/users/' + uid);
    // this.item = this.itemRef.valueChanges();
  }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    });
  }

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
