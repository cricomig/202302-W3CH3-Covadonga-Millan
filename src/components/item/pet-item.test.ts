import { PET } from '../../mocks/pets';
import { Pets } from './pet-item';

describe('given Pets component', () => {
  test('should first', () => {
    document.body.innerHTML = '<div></div>';
    const element = new Pets('div', PET);
    expect(element).toBeInstanceOf(Pets);
  });
});
