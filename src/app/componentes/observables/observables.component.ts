import { Observable } from 'rxjs';
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

    observable.subscribe(res => {
      console.log(res)
    },
    (error) => {
      console.log(error)
    },
    () => {
      console.log('Completou o observable!')
    })
  }

}
