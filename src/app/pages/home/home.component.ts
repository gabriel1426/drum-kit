import { Component, OnInit } from '@angular/core';
import { KeyModel } from "./models/key.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public keys: KeyModel[];

  constructor() {
    this.setKeys();
  }

  private setKeys(): void {
    this.keys =  [
      { letter: 'A', name: 'CLAP', code: '65', audio: 'assets/sounds/clap.wav', animate: false },
      { letter: 's', name: 'HIHAT', code: '83', audio: 'assets/sounds/hihat.wav', animate: false },
      { letter: 'D', name: 'KICK', code: '68', audio: 'assets/sounds/kick.wav', animate: false },
      { letter: 'F', name: 'OPENHAT', code: '70', audio: 'assets/sounds/openhat.wav' ,animate: false },
      { letter: 'G', name: 'BOOM', code: '71', audio: 'assets/sounds/boom.wav' ,animate: false },
      { letter: 'H', name: 'RIDE', code: '72', audio: 'assets/sounds/ride.wav' ,animate: false },
      { letter: 'J', name: 'SNARE', code: '74', audio: 'assets/sounds/snare.wav' ,animate: false },
      { letter: 'K', name: 'TOM', code: '75', audio: 'assets/sounds/tom.wav' ,animate: false },
      { letter: 'L', name: 'TINK', code: '76', audio: 'assets/sounds/tink.wav' ,animate: false }
    ];
  }

  ngOnInit(): void {
    document.addEventListener('keydown', (event) =>{
      console.log(event.keyCode)
      this.keys.forEach( key => {
        if (+key.code === event.keyCode) {
          key.animate = true;
          this.playAudio(key.audio)
          setTimeout( () => {
            key.animate = false;
          }, 100)
        }
      });
    });
  }

  playAudio(asset: string): void {
    const audio = new Audio();
    audio.currentTime= 0;
    audio.src = asset;
    audio.load();
    audio.play();
  }

}
