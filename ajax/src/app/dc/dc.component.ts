import { Component, OnInit } from '@angular/core';
import comicsData from '../_files/comics.json';

interface Comic {  
  _id: string;
  title: string;
  issue: string;
  condition: string;
  price: string;
  publisher: string;
  marvel: boolean;
  cgc: boolean;
  image: string; 
}  

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  comics: Comic[] = comicsData;  

}
