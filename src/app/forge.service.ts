import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppState } from './app.service';
import { Logger } from './log.service';
import { AppHelpers } from './app.helpers';

var log = Logger.get('Forge');

@Injectable()
export class Forge {

  private url:string = undefined;

  constructor(private http: Http, private appState: AppState) {
    this.url = appState.config.urls['FABRIC8_FORGE'];
    log.debug("Forge service using URL: ", this.url);
  }

  getCommands():Observable<any> {
    return AppHelpers.maybeInvoke(this.url, () => {
      return this.http.get(this.url + '/commands')
                      .map((res:Response) => {
                        var array = res.json();
                        // TODO, filter and sort the command list
                        return array;
                      })
                      .catch((error) => {
                        log.error("Error fetching commands: ", error)
                        return error;
                      });
    }, []);
  }

}
