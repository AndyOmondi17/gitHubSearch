import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { Users } from '../users';
import { HttpServiceService } from '../http-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  theUsers:Users[];
  theRepositories:Repository[];


  constructor(private http:HttpServiceService) { }
 

  ngOnInit() {
    this.myName("AndyOmondi17");
  }
  myName(userName){
    this.http.userSearch(userName).then(
      (success)=>{
        this.theUsers=this.http.userProfile;
        console.log(this.theUsers)
  }, 

  (error)=>{
    console.log(error)
  });
  this.http.myRepo(userName).then(
    (success)=>{
      this.theRepositories = this.http.userRepository;  
      console.log(this.theRepositories);
    },
    (error)=>{
      console.log(error)
    });  

}
}
