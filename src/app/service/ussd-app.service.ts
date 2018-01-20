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
  ussdApp: Observable<UssdApp>;
  appId: string;

  constructor(private afs: AngularFirestore) {
    this.ussdAppsCollection = this.afs.collection("ussdApps");
    this.ussdApps = this.ussdAppsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as UssdApp;
        data.Id = a.payload.doc.id;
        this.appId = a.payload.doc.id;
        return data;
      })
    });
   }

   getApps(){
     return this.ussdApps;
   }

   getAppById(id: string){
     this.ussdAppDoc = this.afs.doc("ussdApps/" + id);
     this.ussdApp = this.ussdAppDoc.valueChanges(); 
     return this.ussdApp;
   }

   addApp(app: UssdApp){
     this.ussdAppsCollection.add(app);
     return this.appId;
   }

   updateApp(app: UssdApp, id: string){
     this.ussdAppDoc = this.afs.doc(`ussdApps/${id}`);
     this.ussdAppDoc.update(app);
  }

}


