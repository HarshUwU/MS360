import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { menuService } from './menuService';
import { DatePipe } from '@angular/common';

import * as MenuConfig from '../../assets/MenuConfig.json'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
  isExpanded = true;
  isReportsRouteActive: boolean = false;
  jsondata:any;
  Menus: any;
  Icons: any;
  datePipeString !: string;
  time: any;


  constructor(
    public datepipe: DatePipe,
    private router: Router,
    private menuService: menuService,) {}

  ngOnInit(): void {
    this.Menus = (MenuConfig as any).default.Menus;
    console.log(this.Menus[0].Childrens);

    this.getCurrentDate();
      let currentDateTime = this.datepipe.transform(new Date(), 'MMM d, y, HH:mm:ss', 'UTC');
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

       this.isReportsRouteActive =

       event.url.endsWith('/dashboard')

      }

    });


    

  }
  getCurrentDate() {
    setInterval(() => {
    this.time = new Date(); 
   }, 1000);
  }

  getJson(jsondata:any){
    const menu=[];
    for (const parentKey in jsondata){
      if((parentKey)){
        const parent = {name: parentKey, children :[]};
        const children = jsondata[parentKey];

        menu.push(parent);
      }
    }
    return menu;
  }
  data_method(testData: [], item: string)
  {
   
    this.menuService.setData(testData);
    this.menuService.setDashboard(item);
    
  }



  toggleReportsRouteActive() {
    this.isReportsRouteActive = !this.isReportsRouteActive;
  }

  toggleDropdown(item: any, id1: any, id2: any, event: any): void {

    item.showDropdown = !item.showDropdown;

    if (event.currentTarget.querySelector('.test') != null) {
      if (item.showDropdown == true) {
        var id = 'grouptext_' + id1 + id2;
        const collection = document.getElementById(id);
        collection?.classList.add('mystyle');
      } else {
        var id = 'grouptext_' + id1 + id2;
        const collection = document.getElementById(id);
        collection?.classList.remove('mystyle');
      }
    }
  }

}
