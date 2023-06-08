import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-scheduling',
  templateUrl: './staff-scheduling.component.html',
  styleUrls: ['./staff-scheduling.component.scss']
})
export class StaffSchedulingComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
