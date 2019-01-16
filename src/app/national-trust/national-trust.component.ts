import { Component, OnInit } from '@angular/core';
import { nProperty } from '../models/nProperty.model';
import { NService } from '../services/national-trust.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-national-trust',
  templateUrl: './national-trust.component.html',
  styleUrls: ['./national-trust.component.css']
})
export class NationalTrustComponent implements OnInit {
  private nProperties: nProperty[] = [];

  constructor(private nService: NService ,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.nProperties = this.nService.getNproperties();
  }

}
