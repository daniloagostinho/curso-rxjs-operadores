import { BehaviorSubject, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  ngOnInit() {
    this.initSubject();
  }

  initSubject() {
    const subject = new Subject<number>()
    const subject2 = new BehaviorSubject(0)

    subject2.subscribe({
      next: (v) => console.log(v)

    })

    subject2.subscribe({
      next: (v) => console.log(v)
    })

    subject2.next(10)
    subject2.next(12)
  }
}
