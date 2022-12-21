import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.operatorShare();
  }

  operatorShare() {
    const obsUser$ = this.apiService.getUserShare()
    const nameAmanda$ = obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'Amanda')))
    const nameDaniloSilva$ = obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'Danilo Silva')))
    const nameLeonardo$ = obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'Leonardo')))

    obsUser$.subscribe(console.log)
    nameAmanda$.subscribe(console.log)
    nameDaniloSilva$.subscribe(console.log)
    nameLeonardo$.subscribe(console.log)
  }
}
