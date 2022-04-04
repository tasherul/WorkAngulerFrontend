import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVideoComponent } from './add-video/add-video.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { ListVideoComponent } from './list-video/list-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { DeleteVideoComponent } from './delete-video/delete-video.component';




@NgModule({
  declarations: [
    AddVideoComponent,
    ViewVideoComponent,
    ListVideoComponent,
    EditVideoComponent,
    DeleteVideoComponent,
    
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    AddVideoComponent,
    ViewVideoComponent,
    ListVideoComponent,
    EditVideoComponent,
    DeleteVideoComponent,
  ]
})
export class VideoModule { }
