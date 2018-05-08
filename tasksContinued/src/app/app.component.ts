import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';
  tasks = [];
  show_task = {};
  constructor(private _httpService: HttpService) {}
  getTasksFromServices(): void {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['data'];
    });
  }
  getTask(id: string) {
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => this.show_task = data['data']);
  }
}
