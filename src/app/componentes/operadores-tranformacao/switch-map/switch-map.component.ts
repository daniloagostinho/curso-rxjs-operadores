import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, interval, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements AfterViewInit {
  constructor(private apiService: ApiService) {}
  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit() {
    this.operatorSwitchMap();
    this.operatorInterval();
  }


  operatorInterval() {
    fromEvent(document, 'click')
      .pipe(
        switchMap(() => interval(1000))
      ).subscribe(console.log)

  }

  operatorSwitchMap() {
    fromEvent(this.myButton.nativeElement, 'click').pipe(
      switchMap(() => this.apiService.getUserSwitchMap())
    ).pipe(
      map((data: any) => data.cpf),
      switchMap(cpf => this.apiService.getUserSwitchMapSearch(cpf))
    ).subscribe(console.log)
  }
}
