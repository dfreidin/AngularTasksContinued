import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tasks';
  tasks = [];
  error = null;
  show_task = {};
  new_task: any;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksFromServices();
    this.new_task = { title: "", description: ""}
  }
  cancelEdit() {
    this.show_task = {title: "", description: ""}
  }
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
  newTask() {
    let observable = this._httpService.createTask(this.new_task);
    observable.subscribe(data => {
      if(data["message"] == "Error") {
        this.error = data["error"];
      }
      else {
        this.error = null;
        this.new_task = {title: "", description: ""};
        this.getTasksFromServices();
      }
    });
  }
  updateTask(id: string) {
    let observable = this._httpService.updateTask(this.show_task);
    observable.subscribe(data => {
      if(data["message"] == "Error") {
        this.error = data["error"];
      }
      else {
        this.error = null;
        this.show_task = {title: "", description: ""};
        this.getTasksFromServices();
      }
    });
  }
  deleteTask(id: string) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log(data);
      if(data["message"] == "Error") {
        this.error = data["error"];
      }
      else {
        this.tasks = data["data"];
        this.error = null;
      }
    });
  }
}
