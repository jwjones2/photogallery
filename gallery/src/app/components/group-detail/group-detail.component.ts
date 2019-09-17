import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { Group } from '../services/group';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  providers: [GroupService],
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  group: Group;
  id: number;

  constructor( private groupService: GroupService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id");
    })
    this.groupService.getGroup(this.id)
      .subscribe(group => this.group = group);
  }

}
