import { Component } from '@angular/core'; // importin Component
import { CommonModule } from '@angular/common'; // importin CommonModule

@Component({
  selector: 'app-listcomponent',
  imports: [CommonModule],
  templateUrl: './listcomponent.component.html',
  styleUrl: './listcomponent.component.css'
})
export class ListcomponentComponent {
  // Array of presidents names
  presidents: string[] = ["Higgins ","McAleese ","Robinson "," Hillery "," O Dalaigh"];

  // Array of objects with presidents names and terms
  presidents1: any[] =
    [{name: "Higgins", term:"2011-"},   
    {name: "McAleese", term:"1997-2011"},
    {name: "Robinson", term:"1990-1997"},
    {name: "Hillery", term:"1976-1990"},
    {name: "O Dalaigh", term:"1974-1976"}];

}
