import { Injectable } from '@angular/core';

@Injectable()
export class DurationService {
  static getDuration(departure: string, arrival: string): number {
    const departureTime = new Date(departure).getTime();
    const arrivalTime = new Date(arrival).getTime();
    const diff = arrivalTime - departureTime;
    return diff / 1000 / 60;
  }
}
