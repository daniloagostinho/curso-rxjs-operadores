import { Component, OnInit } from '@angular/core';
import { from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  ngOnInit() {
    this.operatorTake();
  }

  operatorTake() {
    const arr = from([
      {name: 'Danilo', age: 31},
      {name: 'Amanda', age: 18},
      {name: 'Leticia', age: 45},
    ])

    const it$ = interval(1000)

    const names = arr.pipe(
      map(data => data.name),
      take(2)
    )

    const first5Values = it$.pipe(
      take(5)
    )

    names.subscribe(console.log)
    first5Values.subscribe(console.log)
  }
}
