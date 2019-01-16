import { eProperty } from '../models/eProperty.model';

export class EService {
  private eProperties: eProperty[] = [
    new eProperty(1 ,'Tintagel Castle',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/04/Tintagel-Castle-003-Z.jpg',
    'Castle Road, Tintagel, Cornwall, PL34 0HE',
    'http://www.english-heritage.org.uk/visit/places/tintagel-castle/',
    '01840 770328'),
    new eProperty(2 ,'Dover Castle',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/04/Dover-Castle-002-Z.jpg',
    'Castle Hill, Dover, Kent, CT16 1HU',
    'http://www.english-heritage.org.uk/visit/places/dover-castle/',
    '01304 211 067'),
    new eProperty(3 ,'Rievaulx Abbey',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/03/Rievaulx-Abbey-003-Z.jpg',
    'Rievaulx Bank, Rievaulx, Helmsley YO62 5LB',
    'http://www.english-heritage.org.uk/visit/places/rievaulx-abbey/',
    '01439 798228'),
    new eProperty(4 ,'Kenilworth Castle',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/03/Kenilworth-Castle-004-Z.jpg',
    'Castle Green, Off Castle Road, Kenilworth, Warwickshire CV8 1NG',
    'http://www.english-heritage.org.uk/visit/places/kenilworth-castle/',
    '01926 852078'),
    new eProperty(5 ,'Lindisfarne Priory',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/09/Lindisfarne-Priory-001-Z.jpg',
    'Holy Island, Berwick-Upon-Tweed, Northumberland, TD15 2RX',
    'http://www.english-heritage.org.uk/visit/places/lindisfarne-priory/',
    '0128 938 9200'),
    new eProperty(6 ,'Kirby Hall',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/04/Kirby-Hall-001-Z.jpg',
    'BOff Kirby Lane, Corby, Northamptonshire, NN17 3EN',
    'http://www.english-heritage.org.uk/visit/places/kirby-hall/',
    '01536 203230'),
    
  ];

  getEproperties() {
    // console.log(eProperty);
    return this.eProperties;
  }

  getProperty(id: number) {
    return this.eProperties.find((el) => el.id === id);
  }
}