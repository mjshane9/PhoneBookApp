import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  selectedId:any;
  contacts:any;
  constructor() { }

  ngOnInit(): void {
  }

  addtoList(newEvent){
    console.log("This is the event from CONTACT INFO",newEvent);
    this.contacts=newEvent;
  }

  onDelete(index){
    this.contacts.splice(index,1);
    console.log(index);
  }
  onEdit(index){
    this.selectedId=index;
  }
}
