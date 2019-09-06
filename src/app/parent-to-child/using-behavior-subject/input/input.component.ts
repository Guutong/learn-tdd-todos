import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgressService } from '../services/progress.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  progress$: Observable<number>;

  constructor(private progressService: ProgressService) { }

  ngOnInit() {
    this.progress$ = this.progressService.getProgress();
  }

  onIncrease() {
    this.progressService.increase();
  }

  onDecrease() {
    this.progressService.decrease();
  }
}
