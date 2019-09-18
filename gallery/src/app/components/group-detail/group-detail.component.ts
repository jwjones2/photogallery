import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { Group } from '../services/group';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  providers: [GroupService],
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  group: Group;
  id: number;
  edit: boolean;

  constructor( private groupService: GroupService, private route: ActivatedRoute, private toastr: ToastrService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id");
    })

    this.groupService.getGroup(this.id)
      .subscribe(group => this.group = group);

    this.edit = false;
  }

  toggleEdit(){
    if ( this.edit ) {
      this.edit = false;
    } else {
      this.edit = true;
    }
  }

  updateGroup() {
    this.toastr.warning("Updating...");

    // call group service to update the group
    this.groupService.updateGroup(this.group)
        .subscribe(group => this.group = group);
  }

}
