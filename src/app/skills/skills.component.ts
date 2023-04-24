import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  emailstring = "mailto:niklas.tibbe@outlook.de"

  skills = ['Angular', 'TypeScript', 'JavaScript','CSS/SCSS', 'HTML', 'GIT', 'Firebase', 'Scrum', 'Rest-API', 'Material Design']
  skillsImg = ['angular.png', 'typescript.png', 'javascript.png', 'css.png', 'html.png', 'git.png', 'firebase.png', 'scrum.png', 'api.png', 'material.png']

  ngOnInit(): void {
    AOS.init();
  }
}
