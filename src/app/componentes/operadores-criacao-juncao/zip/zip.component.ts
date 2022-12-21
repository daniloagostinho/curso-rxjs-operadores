import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent {
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.getUsersZip();
  }

  getUsersZip() {
    this.apiService.getUsersZip().subscribe(res => console.log(res))
  }
}
