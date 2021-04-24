import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
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
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  ngOnInit(): void {
  }


  comics: Comic[] = comicsData;  

  

}


