import { Component} from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [{
    name: 'Pokedex',
    technologies: 'JavaScript | Rest-API | HTML | CSS | Bootstrap',
    description: 'A catalog of all Pokemon based on the PokeAPI, which also shows the different characteristics of the animals.',
    link: '',
    github: 'https://github.com/mountainfex/developer_journey_pokedex',
    img: 'pokedex.png',
  }, {
    name: 'Join',
    technologies: 'JavaScript | HTML | CSS',
    description: 'Task manager inspired by the Kanban system. Creat and organize tasks using drag and drop functions, assing users and categories.',
    link: '',
    github: 'https://github.com/mountainfex/developer_journey_JOIN',
    img: 'join.png',
  }, {
    name: 'Mirkwoods Destiny',
    technologies: 'JavaScript | HTML | CSS',
    description: 'A simple Jump-and-Run game based on object-oriented programming. Help the elves to find spellbooks and manapotions to beat their enemies.',
    link: '',
    github: 'https://github.com/mountainfex/developer_journey_mirkwoods_destiny',
    img: 'mirkwoods.png',
  }
];

openNewWindow(url: string){
  window.open(url, '_blank');
}

}
