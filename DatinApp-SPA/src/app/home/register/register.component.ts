import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() model: any = {};
  @Output() registerMode = new EventEmitter<boolean>();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successfull');
      this.registerMode.emit(false);
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.registerMode.emit(false);
    console.log('canceled!');
  }

}
