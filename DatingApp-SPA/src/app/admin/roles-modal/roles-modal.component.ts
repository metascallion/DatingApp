import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {User} from '../../_models/user';
import {AuthService} from '../../_services/auth.service';

@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.css']
})
export class RolesModalComponent implements OnInit {
  @Output() updateSelectedRoles = new EventEmitter();
  user: User;
  currentUser: User;
  roles: any[];

  constructor(public bsModalRef: BsModalRef, private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    console.log('Current Username: ' + this.currentUser.userName);
  }

  updateRoles() {
    this.updateSelectedRoles.emit(this.roles);
    this.bsModalRef.hide();
  }

}
