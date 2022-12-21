import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.operatorTimeout();
  }

  operatorTimeout() {
    this.apiService.getUserTimeout().subscribe(console.log)
  }
}
