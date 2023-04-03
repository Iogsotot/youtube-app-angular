import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YoutubeModule } from '../../feature/youtube/youtube.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, FormsModule, YoutubeModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
