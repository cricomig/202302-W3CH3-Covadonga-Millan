import { Header } from './header';

describe('given Header component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot');
    expect(element).toBeInstanceOf(Header); //esta está puesta para llamar al element y que no dé por saco
    const h1 = screen.getByText(/Los más guapos/i);
    expect(h1).toBeInTheDocument();
  });

  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const mockTitle = 'Title';
    const element = new Header('slot', mockTitle);
    expect(element).toBeInstanceOf(Header);
    const h1 = screen.getByText(mockTitle);
    expect(h1).toBeInTheDocument();
  });
});
