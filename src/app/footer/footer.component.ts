import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  emailstring = "mailto:niklas.tibbe@outlook.de"

  links = [{
    github: 'https://github.com/mountainfex/developer_journey_pokedex',
    linkedin: 'https://www.linkedin.com/in/niklastibbe/'
  }];

  openNewWindow(url: string){
    window.open(url, '_blank');
  }
}

