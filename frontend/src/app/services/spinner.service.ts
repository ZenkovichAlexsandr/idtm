import {Subject} from 'rxjs';
import {SpinnerState} from '../models/spinner.model';
import {Injectable} from '@angular/core';

@Injectable()
export class SpinnerService {

  private loaderSubject = new Subject<SpinnerState>();

  getLoaderSubject() {
    return this.loaderSubject;
  }

  show() {
    this.loaderSubject.next({ show: true } as SpinnerState);
  }

  hide() {
    this.loaderSubject.next({ show: false } as SpinnerState);
  }

}
