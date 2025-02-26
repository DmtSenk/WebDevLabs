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
  text = "The number of times the button have been pressed: ";
  num = 0;
  show: boolean = false;
  OnClick(){
    this.num++;
    
  }
  OnstarDBLClick(){
    if(this.show == false){
      this.show = true;
    }else{
      this.show = false;
    }
  }
}
