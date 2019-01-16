import { nProperty } from '../models/nProperty.model';

export class NService {
  private nProperties: nProperty[] = [
    new nProperty(1 ,'Waddesdon Manor',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/01/Waddesdon-Manor-003-Z.jpg',
    'Waddesdon, Aylesbury, Buckinghamshire, England, HP18 OJH',
    'https://www.nationaltrust.org.uk/waddesdon-manor',
    'waddesdonmanor@nationaltrust.org.uk'),
    new nProperty(2 ,'St Michael\'s Mount',
    'http://www.ciekaweuk.pl/wp-content/uploads/2016/09/St-michaels-mount-P-004-Z.jpg',
    'Marazion, Cornwall, TR17 0HS',
    'https://www.nationaltrust.org.uk/st-michaels-mount',
    'stmichaelsmount@nationaltrust.org.uk'),
    new nProperty(3 ,'Glendurgan Garden',
    'http://www.ciekaweuk.pl/wp-content/uploads/2016/10/Glendurgan-Garden-001-Z.jpg',
    'Durgan, Mawnan Smith, Falmouth, Cornwall, England, TR11 5JZ',
    'https://www.nationaltrust.org.uk/glendurgan-garden',
    'glendurgan@nationaltrust.org.uk'),
    new nProperty(4 ,'Bodiam Castle',
    'http://www.ciekaweuk.pl/wp-content/uploads/2016/09/Bodiam-Castle-009-Z.jpg',
    'Bodiam, Robertsbridge, East Sussex, England, TN32 5UA',
    'https://www.nationaltrust.org.uk/bodiam-castle',
    'bodiamcastle@nationaltrust.org.uk '),
    new nProperty(5 ,'Dunster Castle',
    'http://www.ciekaweuk.pl/wp-content/uploads/2016/11/Dunster-Castle-001-Z.jpg',
    'Dunster, Minehead, Somerset, England, TA24 6SL',
    'https://www.nationaltrust.org.uk/dunster-castle',
    'dunstercastle@nationaltrust.org.uk'),
    new nProperty(6 ,'Hadrian\'s Wall and Housesteads Roman Fort',
    'http://www.ciekaweuk.pl/wp-content/uploads/2016/10/Housesteads-Roman-Fort-002-Z.jpg',
    'Bardon Mill, Hexham, Northumberland, NE47 6NN',
    'https://www.nationaltrust.org.uk/hadrians-wall-and-housesteads-fort',
    'housesteads@nationaltrust.org.uk'),
    
  ];

  getNproperties() {
    // console.log(nProperty);
    return this.nProperties;
  }

  getProperty(id: number) {
    return this.nProperties.find((el) => el.id === id);
  }
}