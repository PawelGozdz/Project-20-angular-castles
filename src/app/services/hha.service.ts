import { hProperty } from '../models/hProperty.model';

export class HService {
  private hProperties: hProperty[] = [
    new hProperty(1 ,'Lowther Castle',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/02/Lowther-Castle-003-Z.jpg',
    'Lowther, Penrith CA10 2HH',
    'http://www.lowthercastle.org/',
    'info@lowthercastle.org'),
    new hProperty(2 ,'Mapperton Gardens',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/10/Mapperton-Gardens-001-Z.jpg',
    'Beaminster, Dorset, DT8 3NR',
    'http://www.hha.org.uk/Property/1128/Mapperton',
    'office@mapperton.com'),
    new hProperty(3 ,'Leeds Castle',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/10/Leeds-Castle-001-Z.jpg',
    'Maidstone, Kent, ME17 1PL',
    'http://www.hha.org.uk/Property/736/Leeds-Castle',
    'enquiries@leeds-castle.co.uk'),
    new hProperty(4 ,'Alnwick Castle',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/11/Alnwick-Castle-004-Z.jpg',
    'Alnwick, Northumberland, NE66 1NQ',
    'http://www.hha.org.uk/Property/615/Alnwick-Castle',
    'info@alnwickcastle.com'),
    new hProperty(5 ,'Eilean Donan Castle',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/10/Eilean-Donan-Castle-003-Z.jpg',
    'Eilean Castle, Scotland, IV40 8DX',
    'http://www.hha.org.uk/Property/1634/Eilean-Donan-Castle',
    'eileandonan@btconnect.com'),
    new hProperty(6 ,'Inveraray Castle',
    'http://www.ciekaweuk.pl/wp-content/uploads/2017/10/Inveraray-Castle-003-Z.jpg',
    'Inveraray, Argyll, Scotland, PA328XE',
    'http://www.hha.org.uk/Property/1509/Inveraray-Castle-and-Garden',
    '44 1499 302203'),
    
  ];

  getHproperties() {
    // console.log(hProperty);
    return this.hProperties;
  }

  getProperty(id: number) {
    return this.hProperties.find((el) => el.id === id);
  }

  addProperty(property: hProperty) {
    this.hProperties.push(property);
  }
}