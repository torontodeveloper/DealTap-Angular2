import { Component, OnInit, Input} from '@angular/core';
import {NgModel}  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DealTap Address Book';
  @Input()
  name:string="";
  @Input()
  phone:number;
  contactList:any[] =  [
          {
        "name" : "Tom Cruise",
        "phone":"647-428-7684"
    },
    {
        "name":"Sandra Bullock",
        "phone":"647-428-8473"
    },
    {
        "name":"Denzel Washington",
        "phone":"647-491-3684"
    },
    {
        "name":"Brad Pitt",
        "phone":"416-448-1484"
    },
    {
        "name":"Mel Gibson",
        "phone":"647-402-1804"
    },
    {
        "name":"Angelina Jolie",
        "phone":"647-346-8981"
    }      
    ];

  constructor(){

  }
  ngOnInit(){

  }

  addContact(){
    console.log("Add Contact");
    this.contactList.push({name:this.name,phone:this.phone});
  }
  deleteContact(){
    console.log("Delete Contact");
  }
};
