import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UssdApp } from '../models/ussd-screen';


@Injectable()
export class UssdAppService {

  ussdAppsCollection: AngularFirestoreCollection<UssdApp>;
  ussdApps: Observable<UssdApp[]>;
  ussdAppDoc: AngularFirestoreDocument<UssdApp>;

  constructor(private afs: AngularFirestore) {
    this.ussdAppsCollection = this.afs.collection("ussdApps");
    this.ussdApps = this.ussdAppsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as UssdApp;
        data.Id = a.payload.doc.id;
        return data;
      })
    });
   }

   getApps(){
     return this.ussdApps;
   }

   addApp(app: UssdApp){
     this.ussdAppsCollection.add(app);
   }

   updateApp(app: UssdApp){
     this.ussdAppDoc = this.afs.doc(`ussdApps/${app.Id}`);
     this.ussdAppDoc.update(app);
  }

}


