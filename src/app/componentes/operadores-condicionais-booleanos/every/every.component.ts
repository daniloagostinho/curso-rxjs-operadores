import { Component, OnInit } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss']
})
export class EveryComponent implements OnInit {
  ngOnInit() {
    this.operatorEvery();
  }

  operatorEvery() {
    const values = of(1, 2, 3, 4, 2)

    const equals = values.pipe(
      every(x => x < 5)
    )

    if(equals) {
      console.log('Todos os numeros são menores do que 5')
    }
    equals.subscribe(console.log)
  }

}
