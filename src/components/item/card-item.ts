export class Tasks extends Component {
  constructor(public selector: string, public tasks: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    const items = this.tasks
      .map(
        (item) => `
        <li class="card">
          <span>${item.isCompleted}</span>
          <span title="${item.id}">${item.name}</span>
          <span>${item.owner}</span>
        </li>`
      )
      .join('\n');
    return `
    <section class="tasks"><ul>${items}</ul></section>
    `;
  }
}