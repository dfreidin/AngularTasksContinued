import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getTasks() {
    return this._http.get("/tasks");
  }
  getTask(id: string) {
    return this._http.get(`/tasks/${id}`);
  }
  createTask(new_task) {
    return this._http.post("/tasks", new_task);
  }
  updateTask(updated_task) {
    return this._http.post(`/tasks/${updated_task._id}`, updated_task);
  }
  deleteTask(id: string) {
    return this._http.post(`/tasks/${id}/delete`, {});
  }
}
