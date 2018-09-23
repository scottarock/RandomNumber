import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-omega',
  templateUrl: './omega.component.html',
  styleUrls: ['./omega.component.css']
})
export class OmegaComponent implements OnInit {

  difference: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  calculateDifference() {
    this.difference = this._dataService.computeDifference();
  }

}
