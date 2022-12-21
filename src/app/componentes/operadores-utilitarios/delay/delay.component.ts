import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.operatorDelay();
  }

  operatorDelay() {
    this.apiService.getUserDelay().subscribe(console.log)
  }
}
