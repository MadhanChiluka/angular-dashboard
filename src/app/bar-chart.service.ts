import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  constructor(private db: AngularFireDatabase) { }

  getBarData() {
    return this.db.list('/bargraph-data');
  }

}
