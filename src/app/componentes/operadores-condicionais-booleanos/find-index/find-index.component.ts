import { Component, OnInit } from '@angular/core';
import { findIndex, of } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.scss']
})
export class FindIndexComponent implements OnInit {
  ngOnInit() {
    this.operatorFindIndex();
  }

  operatorFindIndex() {
    const names = of('Danilo', 'Leticia', 'Rafaela')

    const findNameIndex = names.pipe(
      findIndex(val => val === 'Leticia')
    )


    findNameIndex.subscribe(console.log)
  }
}
