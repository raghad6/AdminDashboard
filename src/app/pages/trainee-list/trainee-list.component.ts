import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.scss']
})
export class TraineeListComponent implements OnInit {

  panelOpenState = false;

  forms = [
     {id: 1 , name:'Raghad' ,  date:'2/4/2022',  major:'IT' , TotalH:'120 Hour' , days:'Satarday , Monday , Wednesday' },
     {id: 2 , name:'Nagham' ,  date:'2/4/2022',  major:'IT' , TotalH:'120 Hour' , days:'Satarday , Monday , Wednesday' },
     {id: 3 , name:'Ahmad'  ,  date:'2/4/2022',  major:'IT' , TotalH:'120 Hour' , days:'Satarday , Monday , Wednesday' },
     {id: 5 , name:'Deema'  ,  date:'2/4/2022',  major:'IT' , TotalH:'120 Hour' , days:'Satarday , Monday , Wednesday' },
     {id: 1 , name:'Raghad' ,  date:'2/4/2022',  major:'IT' , TotalH:'120 Hour' , days:'Satarday , Monday , Wednesday' },
     {id: 2 , name:'Nagham' ,  date:'2/4/2022',  major:'IT' , TotalH:'120 Hour' , days:'Satarday , Monday , Wednesday' },
     {id: 3 , name:'Ahmad'  ,  date:'2/4/2022',  major:'IT' , TotalH:'120 Hour' , days:'Satarday , Monday , Wednesday' },
     {id: 5 , name:'Deema'  ,  date:'2/4/2022',  major:'IT' , TotalH:'120 Hour' , days:'Satarday , Monday , Wednesday' }
 ];
  constructor() { }

  ngOnInit() {
  }

}
