import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {
  
  public tabStatistique:Statistique[]=[]
  constructor() { 
    this.tabStatistique = [
    new Statistique('fa1f5f40-be3b-11eb-91ec-7f5875ecfb46','Démographie en France', '60M'),
    new Statistique('551175ecfb46-158-916c-fd15d4125','Le progressisme aux USA', '75M'),
    new Statistique('5dfgdfgdfgdcfb46-1gdf-16c-fgdfgdf25','Les unijambistes au Cambodge', '12M'),
  ];
    
}
}
