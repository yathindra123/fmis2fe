import { Injectable } from '@angular/core';

@Injectable()
export class MoveMessageService {

  moves: string[] = [];
  constructor() { }

  // add to the moves
  add(move: string) {
    this.moves.push(move);
  }

  // Clear moves
  clear() {
    this.moves = [];
  }
}
