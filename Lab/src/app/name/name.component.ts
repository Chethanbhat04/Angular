import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent {
  name: string = "";

  onSaveName(firstName:string, lastName: string){
    if(firstName || lastName){
      this.name = `${firstName} ${lastName}`
    } else {
      this.name = "John Doe"
    }
    console.log("Button Pressed");
    alert(`Entered Name: ${this.name}`);
  }
}
