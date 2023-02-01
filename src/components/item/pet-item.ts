/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
import { PetStructure } from '../../models/pet';
import { Component } from '../component/component';
import './pet-item.scss';

export class Pets extends Component {
  constructor(public selector: string, public tasks: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    const items = this.tasks
      .map(
        (item) => `
        <li class="item">
          <img src="../../../public/${item.name}.jpeg" alt="">
          <div>Id. ${item.id}</div>
          <div title="${item.id}">Name: ${item.name}</div>
          <div>Breed: ${item.breed}</div>
          <div>Adopted: ${item.isAdopted}</div>
        </li>`
      )
      .join('\n');
    return `
    <section class="cards"><ul>${items}</ul></section>
    `;
  }
}
