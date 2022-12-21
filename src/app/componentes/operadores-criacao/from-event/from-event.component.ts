import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements AfterViewInit {
  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit() {
    this.operatorFromEvent();
  }

  operatorFromEvent() {
    const el = fromEvent(this.myButton.nativeElement, 'click')

    el.subscribe(res => console.log(res))

  }
}
