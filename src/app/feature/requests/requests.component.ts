
import { Component, OnInit } from '@angular/core';
import { RequestService, Request } from '../../core/service/request.service';
import { ConfirmationService } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api'
import { SelectItem } from 'primeng/api';
import { Guid } from "guid-typescript";
import { Globals } from '../../shared/globals';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  providers: [ConfirmationService]
})
export class RequestsComponent implements OnInit {
  requestform: FormGroup;
  submitted: boolean;
  //Add a new request
  newRequest: boolean;
  displayDialog: boolean;
  displayAddDialog: boolean;
  request: Request;
  selectedRequests: Request[];
  selectedRequest: Request;
  cols: any[];
  requests: Request[];
  isRecordNotSelected: boolean = false;
  statuses: SelectItem[];
  //Export the table
  exportColumns: any[];
  cities: SelectItem[];
  types: SelectItem[];

  constructor(private fb: FormBuilder, private requestService: RequestService,
    private confirmationService: ConfirmationService, private globals: Globals) {
      this.cities = globals.cities;
      this.types = globals.types;
      this.statuses = globals.statuses;
    }

  ngOnInit() {
    this.reset();

    this.selectedRequests = [];

    this.requests = this.requestService.getStoredRequests();
    if (!this.requests)
      this.requestService.get().then(request => this.requests = request);


    this.cols = [
      //{ field: 'id', header: 'ID' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'description', header: 'Request details' },
      { field: 'city', header: 'City' },
      { field: 'phoneNumber', header: 'Phone' },
      { field: 'type', header: 'Type' },
      { field: 'status', header: 'Status' }
    ];

    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
  }

  confirmDelete() {
    if (this.selectedRequests.length > 0) {
      this.confirmationService.confirm({
        message: 'Do you want to delete this request?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.delete();
        },
        reject: () => { }
      });
    } else {
      this.isRecordNotSelected = true;
    }
  }
  showDialog(isEdit: boolean) {
    this.newRequest = !isEdit;
    if (!isEdit)
      this.request = {} as Request;
    this.displayDialog = true;
  }
  save() {
    if (this.newRequest)
      this.requests.splice(0, 0, this.request);
    else {
      let index = this.requests.findIndex(i => i.id === this.request.id);
      this.requests[index] = this.request;
    }


    this.request = null;
    this.displayDialog = false;
  }

  delete() {
    if (this.selectedRequests) {
      this.selectedRequests.forEach(element => {
        let index = this.requests.findIndex(i => i.id === element.id);
        this.requests = this.requests.filter((val, i) => i != index);
        this.request = null;
        this.displayDialog = false;
      });
      this.selectedRequests = [];
    }
    else {
      this.isRecordNotSelected = true;
      // show error dialog
    }
  }
  /**
   * This function edits grid row
   *
   * @param {} None
   * @param {} None
   * @returns {Response} void
   * @memberof GridSystemComponent
   */
  edit() {
    if (this.selectedRequests.length == 1) {
      this.request = this.selectedRequests[0];
      this.showDialog(true);
    } else {
      // To Do For Future - show error 
      this.isRecordNotSelected = true;
    }
  }
  onRowSelect(event) {
    this.newRequest = false;
    this.request = this.cloneRequest(event.data);
    this.displayDialog = true;
  }

  cloneRequest(u: Request): Request {
    let request;
    for (let prop in u) {
      request[prop] = u[prop];
    }
    return request;
  }
  showAddDialog() {
    this.displayAddDialog = true;
  }

  onSubmit(requestform) {
    this.requests.splice(0, 0, requestform);
    this.requestService.setUpdatedRequest(requestform);
    this.displayAddDialog = false;
    this.reset();
  }

  reset() {
    this.requestform = this.fb.group({
      'id': new FormControl(Guid.create().toString(), Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', Validators.required),
      'type': new FormControl('', Validators.required),
      'description': new FormControl(''),
      'city': new FormControl('', Validators.required),
      'status': new FormControl('Pending')
    });
  }
}
