import {Component, OnInit, ViewChild} from '@angular/core';
import {ListCountryService} from "./services/list-country.service";
import {DatatableComponent} from "@swimlane/ngx-datatable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cities: any;
  temp = [];

  constructor(private listCountryService : ListCountryService) {
  }


  ngOnInit(): void {
    this.getCityByCountryId();
  }
  title = 'webix-app';

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'id' },
    { name: 'name' },
    { name: 'stateName' }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  getCityByCountryId(): void {
    this.listCountryService.getcitiesByCountryId()
      .then(response => {
        this.cities = response;
        this.temp = [...response];

      })
      .catch(err => {
        console.error(err);
      });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.cities = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
