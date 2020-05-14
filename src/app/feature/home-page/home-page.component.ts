import { Component, OnInit, ɵConsole, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesService } from '../../core/service/cities.service';
import { RequestService } from '../../core/service/request.service';
import { Globals } from '../../shared/globals';

// Form
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api'
import { SelectItem } from 'primeng/api';

import { Guid } from "guid-typescript";
import { EventEmitter } from 'events';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private role: string;
  requestform: FormGroup;
  submitted: boolean;
  cities: SelectItem[];
  types: SelectItem[];
  description: string;

  
  display: boolean = false;
  message: string;

  constructor(private citiesService: CitiesService, private fb: FormBuilder,
    private requestService: RequestService, private globals: Globals) {
    this.cities = globals.cities;
    this.types = globals.types;
  }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.requestform = this.fb.group({
      'id': new FormControl(Guid.create().toString(), Validators.required),
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'phonenumber': new FormControl('', Validators.required),
      'type': new FormControl('', Validators.required),
      'description': new FormControl(''),
      'city': new FormControl('', Validators.required),
      'status': new FormControl('Pending')
    });
  }

  onSubmit(requestform) {
    this.requestService.setUpdatedRequest(requestform);
    this.display = true;
  }
}