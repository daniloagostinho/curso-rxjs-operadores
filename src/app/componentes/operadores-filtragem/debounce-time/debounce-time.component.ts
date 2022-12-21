import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { debounce, debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('inputSearch') inputSearch!: ElementRef;

  constructor(private apiService: ApiService) {}

  ngAfterViewInit() {
    this.operatorDebounceTime();
  }

  operatorDebounceTime() {
    fromEvent(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((event: any) => event.target.value),
        switchMap((value: any) => this.apiService.getUsersDebounceTime(value))
      ).subscribe(console.log)

  }
}
