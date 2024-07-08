import { CustomFramework } from '../../../framework/CustomFramework.js';
import './style.css';

export class Input {
  #type;
  #labelText;
  #inputClasses;
  #onChange;
  #value;

  constructor(type, labelText, inputClasses, onChange, value) {
    this.#type = type;
    this.#labelText = labelText;
    this.#inputClasses = inputClasses;
    this.#onChange = onChange;
    this.#value = value;
    this.element = this.render();
  }

  render(inputID = 'null') {
    const input = CustomFramework.createElement('input', {
      type: this.#type,
      class: `input ${this.#inputClasses?.join(' ')}`,
      onChange: this.#onChange,
      id: `${inputID}`,
      value: this.#value,
    });

    const label = CustomFramework.createElement(
      'label',
      { class: 'control-label', for: inputID },
      `${this.#labelText}`
    );

    const inputContainer = CustomFramework.createElement(
      'div',
      { class: 'input-container' },
      input,
      label
    );

    return inputContainer;
  }
}
