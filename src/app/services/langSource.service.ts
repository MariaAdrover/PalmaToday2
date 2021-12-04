import { EventEmitter, Injectable } from '@angular/core';
import { LangSource } from '../interfaces/langSource';

@Injectable({
  providedIn: 'root',
})
export class LangSourceService {
  private _langSources: LangSource[] = [
    { lang: 'ENGLISH', srcs: ['Source1', 'Source2', 'Source3'] },
    { lang: 'CASTELLANO', srcs: ['Source4', 'Source5', 'Source6'] },
    { lang: 'CATALÀ', srcs: ['Source7', 'Source8', 'Source9'] },
    { lang: 'DEUSTCH', srcs: ['Source10', 'Source11'] },
  ];

  onChangeSource = new EventEmitter<any>();
  source: string = '';

  get langSources(): LangSource[] {
    return [...this._langSources];
  }

  constructor() {}

  setSource(source: string) {
    this.source = source;
    //console.log(source);
    this.onChangeSource.emit();
  }
}
