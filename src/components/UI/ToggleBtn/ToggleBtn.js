import { CustomFramework } from '../../../framework/CustomFramework.js';
import { generateID } from '../../../utils/generateId.js';
import { Input } from '../Input/Input.js';
import './style.css';

export class ToggleBtn extends Input {
  #inputID;
  #isToggled;

  constructor(type, labelText, inputClasses, onClick) {
    super(type, labelText, inputClasses);
    this.#inputID = generateID();
    this.onClick = onClick;
    this.toggle = this.toggle.bind(this);
    this.element = this.#render();
    this.context = this;
    this.#isToggled = false;
  }

  toggle() {
    this.#isToggled = !this.#isToggled;
    this.onClick(this.#isToggled);
  }

  #render() {
    const basicInput = super.render(this.#inputID);
    const toggleBtn = CustomFramework.createElement('label', {
      class: 'toggle-btn',
      for: this.#inputID,
      onClick: this.toggle,
    });

    const controlLabel = basicInput.children[1];

    controlLabel.parentNode.insertBefore(toggleBtn, controlLabel);
    return basicInput;
  }
}
