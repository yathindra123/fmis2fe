import { Injectable } from '@angular/core';

@Injectable()
export class MoveMessageService {

  moves: string[] = [];
  constructor() { }

  add(move: string) {
    this.moves.push(move);
  }

  clear() {
    this.moves = [];
  }
}
