import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent  {

  @Input() letter: string;
  @Input() name: string;
  @Input() animate: boolean

  constructor() { }
}
