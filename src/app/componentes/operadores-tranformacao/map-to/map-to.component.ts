import { Component, OnInit } from '@angular/core';
import { mapTo, interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss']
})
export class MapToComponent implements OnInit {
  ngOnInit() {
    this.operatorMapTo();
  }

  operatorMapTo() {
    const click = fromEvent(document, 'click')
    const it$ = interval(1000)

    const mapTo$ = click.pipe(mapTo('Hello world!'))
    const mapToIt$ = it$.pipe(mapTo('Gerou um número'))

    mapTo$.subscribe(console.log)
    mapToIt$.subscribe(console.log)
  }
}
