/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
import { Header } from './header';

describe('given Header component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot');
    expect(element).toBeInstanceOf(Header); // Esta está puesta para llamar al element y que no dé por saco;
  });

  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const mockTitle = 'Title';
    const element = new Header('slot', mockTitle);
    expect(element).toBeInstanceOf(Header);
  });
});
