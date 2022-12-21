import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  ngOnInit() {
    this.operatorOf();
  }

  operatorOf() {
    const arr = of([1, 2, 3, 4, 5])
    const string = of('Olá mundo!')
    const multValue = of({name: 'Danilo'}, true, function showName() {return 'Danilo'})

    arr.subscribe(res => console.log(res))
    string.subscribe(res => console.log(res))

    multValue.subscribe(res => console.log(res))
  }
}
