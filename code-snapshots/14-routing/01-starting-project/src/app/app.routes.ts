import {CanMatchFn, RedirectCommand, Router, Routes} from "@angular/router";

import { routes as userRoutes} from "./users/users.routes"
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {resolveTitle, resolveUserName, UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {inject} from "@angular/core";

const testGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = true;

  if (shouldGetAccess) {
    return true;
  }
  return new RedirectCommand(router.parseUrl(''));
}


export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No selected tasks'
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    canMatch: [testGuard],
    runGuardsAndResolvers: 'always',
    resolve: {
      userName: resolveUserName
    },
    title: resolveTitle
  },
]
