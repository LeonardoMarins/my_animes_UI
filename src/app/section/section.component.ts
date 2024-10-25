import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

type Destaque = {
  imageUrl: string | undefined;
  title: string | undefined;
  duration: string | undefined;
  year: number | undefined;
  score: number | undefined;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})

export class SectionComponent implements OnInit{

  anime: Destaque = {duration:"",imageUrl:"",score:0,title:"",year:0}

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.Destaque();
  }

  Destaque = () => {
    this.service.BuscaAnime(8).subscribe((x) => {
        this.anime = {
          imageUrl: x.data.images.webp?.large_image_url,
          title: x.data.title,
          duration: x.data.duration,
          year: x.data.year,
          score: x.data.score
      }
    });
  }

}
