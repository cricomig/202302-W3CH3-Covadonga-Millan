import { Pets } from './components/item/pet-item';
import { PET } from './mocks/pets';
import { Header } from './components/header/header';

new Pets('#root', PET);
new Header('#root', 'Los más guapos');
