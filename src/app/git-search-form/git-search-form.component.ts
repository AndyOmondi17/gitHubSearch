import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-search-form',
  templateUrl: './git-search-form.component.html',
  styleUrls: ['./git-search-form.component.css']
})
export class GitSearchFormComponent implements OnInit {

  @Output () emituserName = new EventEmitter<any>()

  userName:string;

  user(){
     this.emituserName.emit(this.userName);
  }

  constructor() { }

  ngOnInit() {
  }

}