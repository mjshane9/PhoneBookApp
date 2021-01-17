import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  
  message:any;
  @Input()editId;
  @Output()arrayEvent: EventEmitter<any> = new EventEmitter();
  addcontact:FormGroup;
  model:any={};
  contact:any=[];
  
  
  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    // console.log(changes.editId["currentValue"]);
    if(changes.editId.previousValue!=this.editId){
    this.onEdit(changes.editId["currentValue"]);
    }
    
  }

  ngOnInit(): void {
    this.addcontact=this.fb.group({
      name:['', [Validators.required]],
      contact:['', [Validators.required]],
    });
  }
  onAdd(){
    this.model={
      name:this.addcontact.value["name"],
      contact:this.addcontact.value["contact"],
    }
    this.contact.push(this.model);
    console.log(this.contact);
    this.arrayEvent.emit(this.contact);
  }
  onEdit(id):void{
    this.message="Contact Selected To Edit";
    console.log(this.contact[id]["name"]);
    this.addcontact.patchValue({
      name:this.contact[id]["name"],
      contact:this.contact[id]["contact"]
    })
  }
  onUpdate(){
    if(this.contact.length==0){
      console.log("First Step")
      alert("Please add a contact to first");
    }
    else{
      console.log("Second Step")
      if(this.editId==undefined){
        alert("Please Select a contact to Edit")
      }
      else{
        if(this.contact[this.editId]){
          this.contact[this.editId]["name"]=this.addcontact.value["name"];
        this.contact[this.editId]["contact"]=this.addcontact.value["contact"];
        }
        else{
          alert("Please add a contact to first");
        }
      }
    }
    this.editId=undefined;
    this.message=undefined
  }
}
