import { CustomFramework } from '../../framework/CustomFramework.js';
import './style.css';

export class Controls {
  #controlButtons;

  constructor(controlButtons) {
    this.#controlButtons = controlButtons;
    this.element = this.#render();
  }

  #render() {
    const controls = CustomFramework.createElement(
      'div',
      { class: 'controls-container' },
      ...this.#controlButtons
    );

    return controls;
  }
}
