import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './user/index/index.component';
import { ViewComponent } from './user/view/view.component';
import { CreateComponent } from './user/create/create.component';
import { EditComponent } from './user/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'user/index', pathMatch: 'full' },
  { path: 'users/index', component: IndexComponent },
  { path: 'users/:userId/view', component: ViewComponent },
  { path: 'users/create', component: CreateComponent },
  { path: 'users/:userId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class UserRoutingModule { }
