import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { Group } from '../services/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  providers: [GroupService],
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  
  constructor(private groupsService: GroupService) { }

  ngOnInit() {
    this.groupsService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

  addGroup( name, description ) {
    alert(name);
  }

}
