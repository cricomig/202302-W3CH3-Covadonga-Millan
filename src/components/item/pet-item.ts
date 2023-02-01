import { PetStructure } from '../../models/pet';
import { Component } from '../component/component';

export class Pets extends Component {
  constructor(public selector: string, public tasks: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforebegin');
  }

  createTemplate() {
    const items = this.tasks
      .map(
        (item) => `
        <li class="item">
          <img src="../../../public/${item.name}.jpeg" alt="">
          <span title="${item.id}">Name: ${item.name}</span>
          <span>Breed: ${item.breed}</span>
          <span>Adopted: ${item.isAdopted}</span>
        </li>`
      )
      .join('\n');
    return `
    <section class="tasks"><ul>${items}</ul></section>
    `;
  }
}
