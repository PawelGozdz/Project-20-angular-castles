import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data, Params } from '@angular/router';

import { nProperty } from 'src/app/models/nProperty.model';
import { NService } from 'src/app/services/national-trust.service';

@Component({
  selector: 'app-n-property',
  templateUrl: './n-property.component.html',
  styleUrls: ['./n-property.component.css']
})
export class NPropertyComponent implements OnInit {
  nProperty: nProperty;

  constructor(private nService: NService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.nProperty = this.nService.getProperty(id);
    this.route.params
      .subscribe((params: Params) => {
        this.nProperty = this.nService.getProperty(+params['id']);
      });
  }

}
