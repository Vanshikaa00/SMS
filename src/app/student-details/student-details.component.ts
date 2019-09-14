import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { students} from '../students';



@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  student;
  constructor(  private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.student = students[+params.get('studentId')];
    });
  }

}
