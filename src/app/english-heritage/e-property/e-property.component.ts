import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data, Params } from '@angular/router';

import { eProperty } from 'src/app/models/eProperty.model';
import { EService } from 'src/app/services/english-heritage.service';

@Component({
  selector: 'app-e-property',
  templateUrl: './e-property.component.html',
  styleUrls: ['./e-property.component.css']
})
export class EPropertyComponent implements OnInit {
  eProperty: eProperty;

  constructor(private eService: EService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.eProperty = this.eService.getProperty(id);
    this.route.params
      .subscribe((params: Params) => {
        this.eProperty = this.eService.getProperty(+params['id']);
      });
  }
}
