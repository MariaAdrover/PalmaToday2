import { Component, OnInit } from '@angular/core';
import { LangSource } from '../interfaces/langSource';
import { LangSourceService } from '../services/langSource.service';

@Component({
  selector: 'app-lang-bar',
  templateUrl: './lang-bar.component.html',
  styleUrls: ['./lang-bar.component.scss'],
})
export class LangBarComponent implements OnInit {
  langs: string[] = [];
  langSources: LangSource[] = [];
  //Añadir sources para los enlaces

  constructor(private langSourceService: LangSourceService) {
    this.langSources = this.langSourceService.langSources;
    for (let i = 0; i < this.langSources.length; i++) {
      this.langs.push(this.langSources[i].lang);
    }
  }

  ngOnInit(): void {}
}
