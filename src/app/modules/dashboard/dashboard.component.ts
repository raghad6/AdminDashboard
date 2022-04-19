import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  id: number;
  position: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id:1, position:'Trainer', name: 'raghad' , status: 'Active' },
  {id:2, position:'Trainer', name: 'Ahmad'  , status: '-' },
  {id:3, position:'Trainee', name: 'Deema'  , status : 'Active' },
  {id:4, position:'Trainee', name: 'Bilal'  , status : 'Active' },
  {id:5, position:'Trainer', name: 'Nagham' , status : '-' },
  {id:6, position:'Trainee', name: 'Ameer'  , status : 'Active' },
  {id:7, position:'Trainer', name: 'Anas'   , status : 'Active' },
  {id:8, position:'Trainer', name: 'Karina' , status : '-' },
  {id:9, position:'Trainer', name: 'Yaseen' , status : '-' },
  {id:10, position:'Trainer', name:'Yasmeen', status : 'Active' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
