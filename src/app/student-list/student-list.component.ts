import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { Subject } from 'rxjs';
import { Subjects } from './subjects.enum';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  // create an array of Student objects
  students: Student[] = [
    new Student("Abhinav", "Nath", "angulariscool@xyz.com", Subjects.CS, 8.9, 0),
    new Student("Ethan", "Hunt", "ethanhunt@xyz.com", Subjects.MATHS, 5.4, 1000),
    new Student("Tony", "Stark", "tony_stark@xyz.com", Subjects.PHYSICS, 2.6, 0),
    new Student("Charles", "Xavier", "charles_rocks@xyz.com", Subjects.MATHS, 7.9, 233),
    new Student("Sheldon", "Cooper", "big_bang_sheldon@xyz.com", Subjects.PHYSICS, 3.4, 2000),
    new Student("Rick", "Grimes", "gotta_kill_them_all@xyz.com", Subjects.HISTORY, 2.2, 300),
    new Student("Professor", "X", "methyl_alcohol@xyz.com", Subjects.CHEMISTRY, 6.6, 0),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}