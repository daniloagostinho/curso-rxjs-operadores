import { Component, OnInit } from '@angular/core';
import { find, of } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  ngOnInit() {
    this.operatorFind();
  }

  operatorFind() {
    const names = of('Danilo', 'Leticia', 'Rafaela')

    const findName = names.pipe(
      find(val => val === 'Danilo')
    )

    findName.subscribe(console.log)
  }

}
