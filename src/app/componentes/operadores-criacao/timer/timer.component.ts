import { Component, OnInit } from '@angular/core';
import { concatMap, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  ngOnInit() {
    this.operatorTimer();
  }

  operatorTimer() {
    const values = of(1, 2, 3)

    timer(5000)

      .pipe(
        concatMap(() => values)
      ).subscribe(res => console.log(res))
  }
}
