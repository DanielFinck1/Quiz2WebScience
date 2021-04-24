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
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  comics: Comic[] = comicsData;  

}
