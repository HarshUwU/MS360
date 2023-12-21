import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class menuService {
  private testSubject = new BehaviorSubject<any[]>([]);
  private DashboardSubject = new BehaviorSubject<string>('');
  setData(test: any[]) {
    this.testSubject.next(test);
  }
  setDashboard(data: string) {
    this.DashboardSubject.next(data);
  }
  getData() {
    return this.testSubject.asObservable();
  }
  getDashboard$() {
    return this.DashboardSubject.asObservable();
}
}