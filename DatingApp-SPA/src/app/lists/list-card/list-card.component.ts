import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  @Input() iconUrl: string;
  @Input() title: string;


  constructor(private router: Router) { }

  ngOnInit() {
  }
}
