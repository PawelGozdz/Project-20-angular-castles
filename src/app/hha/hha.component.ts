import { Component, OnInit } from '@angular/core';
import { hProperty } from '../models/hProperty.model';
import { HService } from '../services/hha.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hha',
  templateUrl: './hha.component.html',
  styleUrls: ['./hha.component.css']
})
export class HhaComponent implements OnInit {
  private hProperties: hProperty[] = [];

  constructor(private hService: HService ,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.hProperties = this.hService.getHproperties();
  }

}
