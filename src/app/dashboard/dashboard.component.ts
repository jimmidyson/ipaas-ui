import { Component, OnInit, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { TemplateStore } from '../store/template/template.store';
import { Templates } from '../store/template/template.model';

import { Restangular } from 'ng2-restangular';
import { RESTANGULAR_BING } from '../restangular-bing/restangular-bing.module';

@Component({
  selector: 'ipaas-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  templates: Observable<Templates>;

  loading: Observable<boolean>;

  constructor(private store: TemplateStore, @Inject(RESTANGULAR_BING) private restangularBing: Restangular) {
    this.templates = this.store.list;
    this.loading = this.store.loading;
  }

  ngOnInit() {
    this.store.loadAll();

    this.restangularBing.all('users').getList();
  }

}
