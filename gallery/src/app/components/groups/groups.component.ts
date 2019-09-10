import { Component, OnInit } from '@angular/core';
import { GroupsService } from './groups.service';
import { Group } from './group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  providers: [GroupsService],
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  
  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.groupsService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

}
