import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Text message
  text = "The number of times the button have been pressed: ";
  //count variable initialised to 0
  num = 0;
  // Boolean property 
  show: boolean = false;
  // Method that triggered when button is clicked
  OnClick(){
    this.num++;
    
  }
  // Method that triggered when the image is clicked, changes show property 
  OnstarDBLClick(){
    if(this.show == false){
      this.show = true;
    }else{
      this.show = false;
    }
  }
}
