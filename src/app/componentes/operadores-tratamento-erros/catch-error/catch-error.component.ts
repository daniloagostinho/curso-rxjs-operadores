import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.operatorCatchErrror();
  }

  operatorCatchErrror() {
    this.apiService.getUserCatchError().subscribe(console.log)
  }
}
