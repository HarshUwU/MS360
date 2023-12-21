import { Component,OnInit } from '@angular/core';
import { menuService } from '../sidenav/menuService';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private menuService: menuService,) {}

  Menus: any;
  test: any[] = [];
  DashboardData: string = '';
  Toggle=false;
  
  
  ngOnInit() {
    
    this.menuService.getData().subscribe((test) => {
      this.test = test;
      console.log(`Test data received in Dashboard Component: ${JSON.stringify(this.test)}`);
    });

    this.menuService.getDashboard$().subscribe((DashboardData) => {
      this.DashboardData = DashboardData;
      console.log(`Test data received in Dashboard Component: ${JSON.stringify(this.DashboardData)}`);
    });

  
}
selectedImage: any | null = null;
selectedUrl: any;

  showImage(iconUrl: any, imageUrl: any) {
    if (iconUrl){
    this.selectedImage = iconUrl;
    this.selectedUrl= imageUrl;
    this.Toggle= true;
    console.log("Selected Icon URL:", iconUrl);
    console.log("Selected Redirect URL:", imageUrl);
    }
    else{
      this.selectedImage=null;
    }
}

}
