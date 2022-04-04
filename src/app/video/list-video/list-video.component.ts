import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';



@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css']
})


export class ListVideoComponent implements OnInit {

  list:any;
  constructor(private services:VideoService) { 
    
  }

  ngOnInit(): void {
    this.list = this.services.listVideos().subscribe(data=>{
      console.log(data);
      
      this.list = data;
    }); 
  }

}
