import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DurationService {
  static getDuration(start: Date, end: Date): string {
    const startTime = moment(start);
    const endTime = moment(end);
    return moment.duration(endTime.diff(startTime)).humanize();
  }
}
