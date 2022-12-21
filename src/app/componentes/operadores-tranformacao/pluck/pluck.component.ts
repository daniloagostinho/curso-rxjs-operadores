import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  ngOnInit() {
    this.operatorPluck();
  }

  operatorPluck() {
    const arr = from([
      {name: 'Danilo', age: 31},
      {name: 'Amanda', age: 33},
      {name: 'Leandro', age: 18},
      {name: 'Leandro', age: 18, job: {title: 'Deveveloper', language: 'JS'}},
    ])

    const names = arr.pipe(
      pluck('job', 'title')
    )

    names.subscribe(console.log)
  }
}
