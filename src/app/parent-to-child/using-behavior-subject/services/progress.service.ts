import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  readonly MAX = 100;
  readonly MIN = 0;

  private initState = this.MIN;
  private currentState: number;
  private store: BehaviorSubject<number>;

  constructor() {
    this.currentState = 0;
    this.store = new BehaviorSubject<number>(this.initState);
  }

  public getProgress(): Observable<number> {
    return this.store.asObservable();
  }

  public increase(): void {
    if (this.currentState < this.MAX) {
      this.currentState = this.currentState + 10;
      this.store.next(this.currentState);
    }
  }

  public decrease(): void {
    if (this.currentState > this.MIN) {
      this.currentState = this.currentState - 10;
      this.store.next(this.currentState);
    }
  }

}
