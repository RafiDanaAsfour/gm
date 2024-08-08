import { Component , EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-game-cntrol',
  templateUrl: './game-cntrol.component.html',
  styleUrl: './game-cntrol.component.css'
})

export class GameCntrolComponent  {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  onStartGame() {
    this.interval = setInterval(() => {
    this.intervalFired.emit(this.lastNumber + 1);
    this.lastNumber++;
    }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }
}
