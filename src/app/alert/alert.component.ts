import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService  } from './../services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert()
            .subscribe(message => {
                switch (message && message.type) {
                    case 'success':
                        message.cssClass = 'alert alert-success';
                        break;
                    case 'error':
                        message.cssClass = 'alert alert-danger';
                        break;
                }

                this.message = message;
            });
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
