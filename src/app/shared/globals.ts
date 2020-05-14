import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Globals {
  cities = [];
  types = [];
  statuses = [];

  constructor(){
    this.cities.push({ label: 'Select City', value: '' });
    this.cities.push({ label: 'Diekirch', value: 'Diekirch' });
    this.cities.push({ label: 'Differdange', value: 'Differdange' });
    this.cities.push({ label: 'Dudelange', value: 'Dudelange' });
    this.cities.push({ label: 'Echternach', value: 'Echternach' });
    this.cities.push({ label: 'Echternach', value: 'Echternach' });
    this.cities.push({ label: 'Esch-sur-Alzette', value: 'Esch-sur-Alzette' });
    this.cities.push({ label: 'Ettelbruck', value: 'Ettelbruck' });
    this.cities.push({ label: 'Grevenmacher', value: 'Grevenmacher' });
    this.cities.push({ label: 'Luxembourg City', value: 'Luxembourg City' });
    this.cities.push({ label: 'Remich', value: 'Remich' });
    this.cities.push({ label: 'Rumelange', value: 'Rumelange' });
    this.cities.push({ label: 'Vianden', value: 'Vianden' });
    this.cities.push({ label: ' Wiltz', value: ' Wiltz' });

    this.types.push({ label: 'Select Type', value: '' });
    this.types.push({ label: 'Saloon', value: 'Saloon' });
    this.types.push({ label: 'Massage', value: 'Massage' });
    this.types.push({ label: 'Appliance Repair', value: 'Appliance Repair' });
    this.types.push({ label: 'Cleaning', value: 'Cleaning' });
    this.types.push({ label: 'Plumber', value: 'Plumber' });
    this.types.push({ label: 'Carpenter', value: 'Carpenter' });
    this.types.push({ label: 'Fitness', value: 'Fitness' });

    
    this.statuses.push({ label: 'Select Status', value: '' });
    this.statuses.push({ label: 'Pending', value: 'Pending' });
    this.statuses.push({ label: 'Confirmed', value: 'Confirmed' });
    this.statuses.push({ label: 'In-Progress', value: 'In-Progress' });
    this.statuses.push({ label: 'Completed', value: 'Completed' });
    this.statuses.push({ label: 'Cancelled', value: 'Cancelled' });
  }
}




    

    
    


   
