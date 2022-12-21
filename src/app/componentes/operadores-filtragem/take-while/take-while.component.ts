import { Component, OnInit } from '@angular/core';
import { interval, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent implements OnInit {
  ngOnInit() {
    this.operatorTakeWhile();
  }

  operatorTakeWhile() {
    const it$ = interval(1000)


    const subscription = it$.pipe(
      takeWhile(value => value <= 5)
    )

    subscription.subscribe(console.log)
  }
}
