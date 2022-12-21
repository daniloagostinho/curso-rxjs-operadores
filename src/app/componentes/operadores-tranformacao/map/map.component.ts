import { from, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.operatorMap();
  }
  operatorMap() {
    const arr$ = from([
      {name: 'Danilo', age: 31},
      {name: 'Leticia', age: 18},
      {name: 'Marcos', age: 30},
    ])

    const nums$ = from([1, 2, 3, 4])

    const numsMap$ = nums$.pipe(map(val => val * 2))

    const arrMap = arr$.pipe(
      map(({name}) => name)
    )

    arrMap.subscribe(console.log)
    numsMap$.subscribe(console.log)

    this.apiService.getUsersHttp().subscribe(console.log)
  }
}
