import { Component, OnInit } from '@angular/core';
import { isEmpty, Subject, EMPTY } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.scss']
})
export class IsEmptyComponent implements OnInit {
  ngOnInit() {
    this.operatorIsEmpty();
  }

  operatorIsEmpty() {
    const subject = new Subject<string>()
    const result = EMPTY.pipe(isEmpty())

    subject.subscribe(console.log)
    result.subscribe(console.log)
    subject.next('Danilo')
  }
}
