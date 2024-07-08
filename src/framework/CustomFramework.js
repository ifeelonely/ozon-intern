export class CustomFramework {
  #root;
  #app;

  constructor(rootId, app) {
    this.#root = this.#createRoot(rootId);
    this.#app = app;
  }

  static createElement(tag, props, ...children) {
    const element = document.createElement(tag);
    this.#setProps(element, props);
    this.#addChildren(element, children);

    return element;
  }

  static #setProps(element, props) {
    Object.keys(props).forEach((prop) => {
      if (prop.startsWith('on') && typeof props[prop] === 'function') {
        const event =
          element.type === 'number' || element.type === 'text'
            ? 'input'
            : prop.substring(2).toLowerCase();
        element.addEventListener(event, props[prop]);
      } else {
        element.setAttribute(prop, props[prop]);
      }
    });
  }

  static #addChildren(element, children) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        element.appendChild(child);
      }
    });
  }

  #createRoot(rootId) {
    return document.getElementById(rootId);
  }

  render() {
    this.#root.appendChild(this.#app);
  }
}
