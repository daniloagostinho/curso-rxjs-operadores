import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.operatorShareReplay();
  }

  operatorShareReplay() {
    const obsUser$ = this.apiService.getUserShareReplay()
    const nameAmanda$ = obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'Amanda')))
    const nameDaniloSilva$ = obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'Danilo Silva')))
    const nameLeonardo$ = obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'Leonardo')))

    obsUser$.subscribe(console.log)
    nameAmanda$.subscribe(console.log)
    nameDaniloSilva$.subscribe(console.log)
    nameLeonardo$.subscribe(console.log)
  }
}
