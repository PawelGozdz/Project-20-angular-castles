import { Component, OnInit } from '@angular/core';
import { eProperty } from '../models/eProperty.model';
import { EService } from '../services/english-heritage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-english-heritage',
  templateUrl: './english-heritage.component.html',
  styleUrls: ['./english-heritage.component.css']
})
export class EnglishHeritageComponent implements OnInit {
  private eProperties: eProperty[] = [];

  constructor(private eService: EService ,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.eProperties = this.eService.getEproperties();
  }

}
