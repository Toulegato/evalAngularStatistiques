import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiquesService } from './services/statistiques.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evaluationAngular';
   
  public tabStatistique:Statistique[];
  constructor(public singletonStat: StatistiquesService) {
    this.tabStatistique = this.singletonStat.tabStatistique;
}

supprimerStat(statistique: Statistique){
let index = this.tabStatistique.indexOf(statistique);
if (index != -1){
  this.tabStatistique.splice(index, 1);
  }
 }
}

