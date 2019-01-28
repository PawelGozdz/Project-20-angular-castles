import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { NService } from '../services/national-trust.service';
import { EService } from '../services/english-heritage.service';
import { HService } from '../services/hha.service';
import { eProperty } from '../models/eProperty.model';
import { nProperty } from '../models/nProperty.model';
import { hProperty } from '../models/hProperty.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newForm: FormGroup;

  constructor(private nService: NService,
              private eService: EService,
              private hService: HService) { }
  

  ngOnInit() {
    this.newForm = new FormGroup({
     'propertyName': new FormControl(null, Validators.required),
     'inputGroupSelect': new FormControl(null, Validators.required),
     'address': new FormControl(null, Validators.required),
     'website': new FormControl(null, Validators.required),
     'email': new FormControl(null, Validators.required),
     'imgUrl': new FormControl(null, Validators.required),
    });
   }  

  onSubmit() {
    if (+this.newForm.value.inputGroupSelect === 1) {
      this.nService.addProperty(new nProperty(
        this.nService.getNproperties().length + 1,
        this.newForm.value['propertyName'],
        this.newForm.value['imgUrl'],
        this.newForm.value['address'],
        this.newForm.value['website'],
        this.newForm.value['email']
      ))
    } else if (+this.newForm.value.inputGroupSelect === 2) {
      this.eService.addProperty(new eProperty(
        this.eService.getEproperties().length + 1,
        this.newForm.value['propertyName'],
        this.newForm.value['imgUrl'],
        this.newForm.value['address'],
        this.newForm.value['website'],
        this.newForm.value['email']
      ))
    } else {
      this.hService.addProperty(new hProperty(
        this.hService.getHproperties().length + 1,
        this.newForm.value['propertyName'],
        this.newForm.value['imgUrl'],
        this.newForm.value['address'],
        this.newForm.value['website'],
        this.newForm.value['email']
      ))
    }

    this.newForm.reset();
  }
}
