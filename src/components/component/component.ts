/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
export abstract class Component {
  selector!: string;
  element!: HTMLElement;
  template!: string;

  render(place: globalThis.InsertPosition) {
    const element = document.querySelector(this.selector)!;
    element.insertAdjacentHTML(place, this.template);
  }
}
