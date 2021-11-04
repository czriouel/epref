import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeycloakService } from 'keycloak-angular';
import { AppConfig } from '../../models/config/app-config.model';


@Injectable()
export class AppConfigService {

  static settings: AppConfig;

  constructor(public http: HttpClient, public keycloak: KeycloakService) {}

  load() {
    const jsonFile = 'assets/config/app.config.json';
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then(async (response: any) => {
        AppConfigService.settings = response;
        
        await this.keycloak.init({
          config: AppConfigService.settings.keycloakConfig,
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
          },
          bearerExcludedUrls: []
        });
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }

  get staticSettings() {
    return AppConfigService.settings;
  }


  /* private _loadAllUsers() {
    this.http
      .get<Gestionnaire[]>(`${this.staticSettings.apiServerUrl}gestionnaires/gestionnaires`)
      .subscribe(gestionnaires => {
        this.localStorageService.set(CONSTS.GESTIONNAIRES, gestionnaires);
      });
  }

  private _loadEquipes() {
    this.http
      .get<Equipe[]>(`${this.staticSettings.apiServerUrl}equipes/equipes`)
      .subscribe(equipes => {
        this.localStorageService.set(CONSTS.EQUIPES, equipes);
      });
  }

  private _loadClasseurs() {
    this.http.get<Classeur[]>(`${this.staticSettings.apiServerUrl}classeurs/classeurs`).subscribe(classeurs => {
      this.localStorageService.set(CONSTS.CLASSEURS, classeurs);
    });
  } */

}
