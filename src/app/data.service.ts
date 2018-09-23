import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  alphaNumbers: number[] = [];
  betaNumbers: number[] = [];

  constructor() { }

  generateAlphaRandom(): void {
    this.alphaNumbers.push(Math.floor(Math.random() * 10 + 1))
  }

  generateBetaRandom(): void {
    this.betaNumbers.push(Math.floor(Math.random() * 10 + 1))
  }

  computeDifference(): number {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return this.alphaNumbers.reduce(reducer) - this.betaNumbers.reduce(reducer);
  }
}
