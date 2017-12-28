import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  status: string;
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    if (1 > 10) {
      return 'Pending';
    }else {
      return 'Success';
    }
  }
  getStatusClass() {
    if (1 > 10) {
      return 'label label-warning';
    }else {
      return 'label label-success';
    }
  }
}
