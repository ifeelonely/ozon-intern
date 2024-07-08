import { CustomFramework } from '../../framework/CustomFramework.js';
import { debounce } from '../../utils/debounce.js';
import { CircularProgressBar } from '../CircularProgressBar/CircularProgressBar.js';
import { Controls } from '../Controls/Controls.js';
import { Input } from '../UI/Input/Input.js';
import { ToggleBtn } from '../UI/ToggleBtn/ToggleBtn.js';
import './style.css';

export class ProgressBlock {
  constructor() {
    this.initialValue = 25;
    this.element = this.#render();
  }

  #render() {
    const progressBlock = CustomFramework.createElement('div', {});

    const { element: circularProgressBar, context: barContext } =
      new CircularProgressBar({
        initialValue: this.initialValue,
      });

    const { element: input } = new Input(
      'number',
      'Value',
      ['number-input'],
      debounce(barContext.changeValue, 300),
      this.initialValue
    );

    const { element: animateBtn } = new ToggleBtn(
      'checkbox',
      'Animate',
      ['toggle-btn-input'],
      barContext.setAnimate
    );

    const { element: hideBtn } = new ToggleBtn(
      'checkbox',
      'Hide',
      ['toggle-btn-input'],
      barContext.setHide
    );

    const { element: controls } = new Controls([input, animateBtn, hideBtn]);
    progressBlock.classList.add('progress-block');
    progressBlock.appendChild(circularProgressBar);
    progressBlock.appendChild(controls);

    return progressBlock;
  }
}
