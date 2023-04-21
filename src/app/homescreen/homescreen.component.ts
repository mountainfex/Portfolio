import { Component } from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent{
  emailstring = "mailto:niklas.tibbe@outlook.de"

  links = [{
    github: 'https://github.com/mountainfex/developer_journey_pokedex',
    linkedin: 'https://www.linkedin.com/in/niklastibbe/'
  }];

  openNewWindow(url: string){
    window.open(url, '_blank');
  }
}

