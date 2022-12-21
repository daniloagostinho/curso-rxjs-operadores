import { fromEvent, interval, takeUntil, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {
  ngOnInit() {
    this.operatorTakeUntil();
  }

  operatorTakeUntil() {
    const it$ = interval(1000)
    const it2$ = interval(1000)
    const timer$ = timer(5000)
    const click$ = fromEvent(document, 'click')

    const subscription = it$.pipe(
      takeUntil(timer$)
    )


    const subscription2 = it2$.pipe(
      takeUntil(click$)
    )

    subscription.subscribe(console.log)
    subscription2.subscribe(console.log)
  }
}
