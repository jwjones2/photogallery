import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { GroupComponent } from './components/group/group.component';
import { GroupsComponent } from './components/groups/groups.component';


const routes: Routes = [
  { path: 'event', component: EventComponent },
  { path: 'group', component: GroupComponent },
  { path: 'groups', component: GroupsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
