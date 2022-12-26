import { interval, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  ngOnInit() {
    this.initObservable();
  }

  initObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(10)
      subscriber.next('Danilo')
      subscriber.next(true)
      subscriber.next({name: 'Danilo'})
      subscriber.complete();
    })

    const it = interval(1000)

    const observer = {
      next: (x: any) => console.log('Observer next value ' + x),
    }


    const subscription = observable.subscribe(observer)
    const subscription2 = it.subscribe(console.log)


    setTimeout(() => {
      subscription2.unsubscribe();
    }, 3000)

    subscription.unsubscribe();

  }

}
