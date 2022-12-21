import { Component, OnInit } from '@angular/core';
import { filter, from, interval } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  ngOnInit() {
    this.operatorFilter();
  }

  operatorFilter() {
    const arr = from([
      {name: 'Danilo', age: 31},
      {name: 'Amanda', age: 18},
      {name: 'Leticia', age: 45},
    ])

    const it$ = interval(1000)

    const names = arr.pipe(
      filter(value => value.age > 18)
    )

    const nummberGreaterThan5 = it$.pipe(
      filter(value => value >= 5)
    )

    names.subscribe(console.log)
    nummberGreaterThan5.subscribe(console.log)
  }
}
