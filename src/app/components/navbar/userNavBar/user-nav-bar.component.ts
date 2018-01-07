import { Component, OnInit } from '@angular/core';
import {TransferService} from '../../../services/transfer.service';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent implements OnInit {

  constructor(private transferService: TransferService ) { }

  UserName= TransferService.employeeName;

  ngOnInit() {
  }

}
