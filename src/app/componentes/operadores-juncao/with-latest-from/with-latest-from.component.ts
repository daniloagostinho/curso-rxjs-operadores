import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {
  ngOnInit() {
    this.operatorWithLatestFrom();
  }

  operatorWithLatestFrom() {
    const clicks = fromEvent(document, 'click')

    const timer$ = interval(1000);

    const result = clicks.pipe(
      map((event: any) => event.screenX),
      withLatestFrom(timer$))

    result.subscribe(console.log)
  }
}
