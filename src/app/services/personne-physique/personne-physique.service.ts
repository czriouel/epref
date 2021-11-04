import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonnePhysique } from 'src/app/models/personne-physique/personne-physique';
import { AppConfigService } from '../config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnePhysiqueService {

  apiServerUrl: string | undefined;
  token: string | undefined;
  
  constructor(
     private http: HttpClient,
     private appConfigService: AppConfigService,
   ) {
 console.log("--------------------"+this.appConfigService.staticSettings)
    this.apiServerUrl = this.appConfigService.staticSettings.apiServerUrl;
    this.token = this.appConfigService.staticSettings.token;
 
     
 
   }
  getSignalitique(idSystemSrcIdent : string, natureIdent: string, valeurIdent: string): Observable<PersonnePhysique[]> {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 
    //     'Access-Control-Allow-Origin':'*',
    //     'Authorization':'authkey',
    //     'userid':'1'
    //   })
    // };
     return this.http.get<PersonnePhysique[]>(`${this.apiServerUrl}${this.token}/pp/signaletique?idSystemSrcIdent=${idSystemSrcIdent}&natureIdent=${natureIdent}&valeurIdent=${valeurIdent}`
 
      // `${this.apiServerUrl}${this.token}/pp/signaletique?idSystemSrcIdent=${idSystemSrcIdent}&natureIdent=${natureIdent}&valeurIdent=${valeurIdent}&filtres=${filtres}&tri=${tri}`
 
     );
 
   }
}
