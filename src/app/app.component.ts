import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipes';
  onNavigate(feature:string){
    console.log(feature, typeof feature);
    this.loadedFeature = feature
  }
}
