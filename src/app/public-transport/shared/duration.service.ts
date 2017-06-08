import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DurationService {
  static getDuration(start: number, end: number): number {
    const startTime = moment(start);
    const endTime = moment(end);
    console.log(startTime, endTime, moment.duration(endTime.diff(startTime)));
    return moment.duration(endTime.diff(startTime)).asMinutes() * 1000;
  }
}
