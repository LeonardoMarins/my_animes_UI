import { Injectable } from '@angular/core';
import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
    animeClient = new AnimeClient();

    constructor(private http: HttpClient) { }

    BuscaAnime = (id: number): Observable<JikanResponse<Anime>> => {
        return this.http.get<JikanResponse<Anime>>(`https://api.jikan.moe/v4/anime/${id}`)
    }
}