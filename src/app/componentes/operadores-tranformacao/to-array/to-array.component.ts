import { of, toArray } from 'rxjs';
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

    const obj = of({name: 'Danilo', age: 31})

    const arr = obj.pipe(toArray())
    arr.subscribe(console.log)
    this.apiService.getUserToArray().subscribe(console.log)
  }
}
