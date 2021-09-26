import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { DataSnapshot } from '@angular/fire/compat/database/interfaces';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { where } from 'firebase/firestore';
import { map } from 'rxjs/operators';
import Voto from 'src/app/pages/detail-project/models/voto';

@Injectable({
    providedIn: 'root'
})
export class FirelService {



    private dbPath = '/votos';

    Ref: AngularFireList<Voto>;

    votosCollection!: AngularFirestoreCollection<Voto>;
    votos: any;

    constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {
        this.Ref = db.list(this.dbPath);
    }

    getAll(): AngularFireList<Voto> {
        return this.Ref;
    }
    getVotosGenerales() {
        return this.afs.collection<any>('votos').valueChanges();
    }

    getVotos() {
        this.votosCollection = this.afs.collection<any>('votos', ref => ref.where('slug', '==', 'sistema-de-exposicion-y-votaciones'));
        return this.votos = this.votosCollection.snapshotChanges().pipe(
            map((actions: any[]) => actions.map(
                (a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
                    const data = a.payload.doc.data() as Voto;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                }
            )));;
    }


    create(tutorial: Voto): any {
        return this.Ref.push(tutorial);
    }

    addVoto(voto: any) {

        this.afs.collection<any>('votos').add(voto);
    }

    update(key: string, value: any): Promise<void> {
        return this.Ref.update(key, value);
    }

    delete(key: string): Promise<void> {
        return this.Ref.remove(key);
    }

    deleteAll(): Promise<void> {
        return this.Ref.remove();
    }
}