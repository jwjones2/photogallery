import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { GroupComponent } from './components/group/group.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupEditComponent } from './components/group-edit/group-edit.component';


const routes: Routes = [
  { path: 'event', component: EventComponent },
  { path: 'group', component: GroupComponent },
  { path: 'group/:id', component: GroupDetailComponent },
  { path: 'group-edit/:id', component: GroupEditComponent }
  { path: 'groups', component: GroupsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
