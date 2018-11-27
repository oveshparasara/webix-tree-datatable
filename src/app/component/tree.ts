/**
 * Created by ovesh on 27/11/18.
 */
import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {ListCountryService} from "../services/list-country.service";



@Component({
  selector: 'tree',
  template: `<button (click)="addNode()"> Add Item </button> <button (click)="removeItem()"> RemoveItem </button>
  <button (click)="openAll()"> openAll</button>`
})
export class TreeComponent implements OnDestroy, OnInit {
  private ui: webix.ui.tree;

  treedata = [
    { id: '1', value: 'Book 1', open: true ,
      data: [
      { id: '1.1', value: 'Part 1' },
      { id: '1.2', value: 'Part 2' }
    ]},
    { id: '2', value: 'Book 2', data: [
      { id: '2.1', value: 'Part 1' }
    ]}
  ];
   cities: any;
  private temp:any;

  constructor(root: ElementRef,private listCountryService : ListCountryService) {
    this.ui = <webix.ui.tree>webix.ui({
      container: root.nativeElement,
      view: 'tree',
      select: true,
      drag: true,
      height: 300,
      width: 300,
      editable: true,
      editor: 'text',
      editValue: 'value',
      open: true,
      filterMode: {
        showSubItems: true,
      },
      dragscroll: true,
      data: this.treedata
    });
  }

  ngOnInit() {
    //this.getCityByCountryId();
    this.ui.resize();
  }

  getCityByCountryId(): void {
    this.listCountryService.getcitiesByCountryId()
      .then(response => {
        this.cities = response;
        this.treedata = this.cities.map(data => {
          return { id: data.id , value : data.name }
        });
        this.ui.resize();
        this.temp = [...response];

      })
      .catch(err => {
        console.error(err);
      });
  }

  ngOnDestroy() {
    this.ui.destructor();
  }

  addNode() {
    const nodeId: any = this.ui.getSelectedId(true);
    this.ui.add({ value: 'New item'}, 0 , nodeId);
  }

  removeItem() {
    const nodeId: any = this.ui.getSelectedId(true);
    this.ui.remove(nodeId);
  }
  openAll() {
    this.ui.openAll();
  }

}
