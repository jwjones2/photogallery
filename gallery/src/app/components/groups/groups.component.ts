import { Component, OnInit } from '@angular/core';
import { Group, ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGroups()
      // clone the data object, using its known Config shape
      .subscribe((data: Group[]) => this.groups = { ...data });
  }

}
