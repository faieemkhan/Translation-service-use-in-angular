import { Component, Input } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { LocalizationService } from './internationalization/localization.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgTask1';
  language: string = 'en-US';
  
  @Input() name: string | undefined;
  constructor(private localizationService: LocalizationService) {}
  get nameValue(): string {
    return this.localizationService.translate('banner.world');
  }


  onSelect(lang: string): void {
    localStorage.setItem('language', lang);
    this.localizationService.initService();
    console.log(lang);
  }
}
