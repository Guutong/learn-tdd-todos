import { Component, OnInit } from '@angular/core';
import { ProgressService } from 'src/app/parent-to-child/using-behavior-subject/services/progress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
