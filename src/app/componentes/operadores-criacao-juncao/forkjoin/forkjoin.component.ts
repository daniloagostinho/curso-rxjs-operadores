import { ajax } from 'rxjs/ajax';
import { Component, OnInit } from '@angular/core';
import { forkJoin, of, timer, throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.operatorForkJoin();
    this.getUsers();
  }

  operatorForkJoin() {
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    })

    const httpMult$ = forkJoin({
      first: of(1, 2, 3, 4),
      second: timer(1000),
      pro: Promise.resolve(10)
    })

    http$.subscribe(res => console.log(res))

    httpMult$.subscribe(res => console.log(res))
  }

  getUsers() {
    this.apiService.getUsersForkJoin().subscribe(res => console.log(res))
  }
}
