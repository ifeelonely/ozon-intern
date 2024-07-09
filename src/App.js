import { ProgressBlock } from './components/ProgressBlock/ProgressBlock.js';

export class App {
  constructor() {
    this.app = this.#render();
  }

  #render() {
    const app = document.createElement('div');
    app.classList.add('App');

    const { element: progressBlock } = new ProgressBlock();
    app.appendChild(progressBlock);

    return app;
  }
}
