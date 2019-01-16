import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data, Params } from '@angular/router';

import { hProperty } from 'src/app/models/hProperty.model';
import { HService } from 'src/app/services/hha.service';

@Component({
  selector: 'app-h-property',
  templateUrl: './h-property.component.html',
  styleUrls: ['./h-property.component.css']
})
export class HPropertyComponent implements OnInit {
  hProperty: hProperty;

  constructor(private hService: HService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.hProperty = this.hService.getProperty(id);
    this.route.params
      .subscribe((params: Params) => {
        this.hProperty = this.hService.getProperty(+params['id']);
      });
  }

}
