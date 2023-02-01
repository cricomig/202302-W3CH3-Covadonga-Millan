import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(
    public selector: string,
    public title: string = 'Los más guapos'
  ) {
    super();
    this.template = this.createTemplate();
    this.render('beforebegin');
  }

  private createTemplate() {
    return `
      <header class="header">
        <h1>${this.title}</h1>
      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
