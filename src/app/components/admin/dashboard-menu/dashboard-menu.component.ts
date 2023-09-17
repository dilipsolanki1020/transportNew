import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit{
  selectedTab: number  = 1;
  constructor(private globalservice : GlobalDataService, private router : Router){
    // selectedTab =  this.globalservice.selectedTab;
   }
  //  selectedTab =  this.globalservice.selectedTab;
  ngOnInit(): void {

    this.router.navigate(['/dashboard/schedule-order'])

  }
  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
    this.globalservice.selectedTab = tabNumber;
    // Add any additional logic or actions you want to perform when a tab is selected
  }
}
