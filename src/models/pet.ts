type HasId = {
  id: string;
};

export type TypePetStructure = {
  name: string;
  breed: string;
  isAdopted: boolean;
};

export type PetStructure = HasId & TypePetStructure;

export class Pet implements PetStructure {
  public id: string;
  public isAdopted: boolean;
  static generateId() {
    const aNumbers = new Uint32Array(1);
    crypto.getRandomValues(aNumbers);
    return ('000000' + aNumbers[0]).slice(-6);
  }

  constructor(public name: string, public breed: string) {
    this.id = Pet.generateId();
    this.isAdopted = false;
  }
}
