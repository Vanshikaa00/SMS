/*ALL THE PREDEFINED STUDENT DATA OVER HERE!*/
import { Component, OnInit } from '@angular/core';
import { students } from '../students';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
/*ALREADY MADE THIS BUT I AM IMPLEMENTING  StudentsListComponent CLASS IN MY OWN WAY*/
/*export class StudentsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
export class StudentsListComponent {
students = students;
  constructor() { }



}
