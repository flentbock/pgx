import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
      this.authService.getTasks()
        .subscribe(data => {
          this.tasks = data;
        }, err => {
          //Si erreur suppression du Token enregistré dans le localStorage
          this.authService.logout();
          this.router.navigateByUrl('/login');
        });
  }

  onNewTask() {
    this.router.navigateByUrl('/new-task');
  }

}
