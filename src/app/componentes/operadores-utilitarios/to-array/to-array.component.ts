import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.operatorToArray();
  }

  operatorToArray() {
    this.apiService.getUserDelay().subscribe(console.log)
  }
}
