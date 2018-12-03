import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  task;
  mode = 0;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onSaveTask(task) {
    this.authService.saveTask(task)
      .subscribe(resp => {
        this.task = resp;
        this.mode = 2;
      }, err => {
        this.mode = 0;
    });
  }

}
