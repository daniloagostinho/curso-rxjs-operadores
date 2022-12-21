import { Component, OnInit } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {
  ngOnInit() {
    this.operatorStarWith();
  }

  operatorStarWith() {
    const values = of(1, 2, 3)
    const message = of('World', 'Goodbye')

    const numbers = values.pipe(
      startWith(0)
    )

    const messageWelcome = message.pipe(
      startWith('Hello')
    )

    numbers.subscribe(console.log)
    messageWelcome.subscribe(console.log)
  }
}
