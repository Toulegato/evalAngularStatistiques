import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evaluationAngular';
  

  stat1:Statistique= new Statistique('fa1f5f40-be3b-11eb-91ec-7f5875ecfb46','Démographie en France', '60M');
  stat2:Statistique= new Statistique('551175ecfb46-158-916c-fd15d4125','Le progressisme aux USA', '75M')
  
  public tabStatistique:Statistique[]=[this.stat1, this.stat2]
  constructor() {
}
}

