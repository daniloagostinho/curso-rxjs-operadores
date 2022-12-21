import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { skip, tap, interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements AfterViewInit {
  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit() {
    this.operatorSkip();
  }
  operatorSkip() {
    fromEvent(this.myButton.nativeElement, 'click')
      .pipe(
        skip(4),
        tap(() => console.log('Cliquei no botão!'))
      ).subscribe()

      const it$ = interval(1000)

        it$.pipe(
          skip(10)
        ).subscribe(console.log)

  }
}
