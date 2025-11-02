import { Component, Input, Output } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

import { type Task } from './tasks/task/task.model';

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;
  newTask!: Task;
  newTaskBool!: boolean;

  get selectedUser() {
    return this.users.find((user => user.id === this.selectedUserId));
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
