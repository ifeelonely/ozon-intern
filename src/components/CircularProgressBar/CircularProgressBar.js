import { CustomFramework } from '../../framework/CustomFramework.js';
import { animateGradient } from '../../utils/animateGradient.js';
import './style.css';

export class CircularProgressBar {
  #value;
  #isHidden;

  constructor({ initialValue }) {
    this.#isHidden = false;
    this.element = this.#render();
    this.calcGradientDeg = this.calcGradientDeg.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.#value = initialValue;
    this.setHide = this.setHide.bind(this);
    this.setAnimate = this.setAnimate.bind(this);
    this.context = this;

    this.calcGradientDeg(this.#value);
  }

  // ===Api===

  changeValue() {
    const newValue = document.querySelector('.number-input').value;
    if (!this.#isValidValue(+newValue)) return;
    animateGradient(+newValue, this.#value, this.calcGradientDeg);
    this.#value = this.#isValidValue(newValue) ? newValue : this.#value;
  }

  setHide(isHidden) {
    this.#isHidden = isHidden;
    this.element.style.opacity = this.#isHidden ? 0 : 1;
  }

  setAnimate(isAnimated) {
    if (isAnimated)
      this.element.classList.add('circular-progress-bar_animated');
    else this.element.classList.remove('circular-progress-bar_animated');
  }

  // ===Private methods===

  #isValidValue(value) {
    return +value >= 0 && +value <= 100;
  }

  calcGradientDeg(value) {
    if (!this.#isValidValue) return;
    this.element.style.background = `conic-gradient(var(--main-blue) ${
      value * 3.6
    }deg, var(--main-grey) 0deg)`;
  }

  #render() {
    const circularProgressBar = CustomFramework.createElement('div', {}, []);
    circularProgressBar.classList.add('circular-progress-bar');
    return circularProgressBar;
  }
}
