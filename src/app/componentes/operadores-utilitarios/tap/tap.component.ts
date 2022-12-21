import { Component, OnInit } from '@angular/core';
import { filter, of, tap, map } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  ngOnInit() {
    this.operatorTap();
  }

  operatorTap() {
    const arr = of([
      {id: 1, name: 'Danilo', age: 31},
      {id: 2, name: 'Leonardo', age: 20},
    ])

    const subscription = arr.pipe(
      tap(val => console.log('antes do map -->> ', val)),
      map((value: any) => value.filter((val: any) => val.name === 'Danilo')),
      tap(val => console.log('depois do map -->> ', val))
    )


    subscription.subscribe()
  }
}
