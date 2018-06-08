// Subject to change
import { Room } from '../../../projects/revaturecloud/selection/src/lib/models/room.model';
import { Address } from '../../../projects/revaturecloud/selection/src/lib/models/address.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class mockrooms implements InMemoryDbService {

  createDb() {
    const rooms = [
      {
        RoomId: '1',
        Location: 'Livingston',
        Address: {
          Street: 'Livingston Ave',
          aptNum: '1209',
          City: 'Lutz',
          State: 'FL',
          PostalCode: '11111',
          Country: 'USA'
        },
        Vacancy: 2,
        Occupancy: 4,
        Gender: 'M'
      },
      {
        RoomId: '2',
        Location: 'Livingston',
        Address: {
          Street: 'Livingston Ave',
          aptNum: '1200',
          City: 'Lutz',
          State: 'FL',
          PostalCode: '11111',
          Country: 'USA'
        },
        Vacancy: 3,
        Occupancy: 3,
        Gender: 'M'
      },
      {
        RoomId: '3',
        Location: 'Bellarmine',
        Address: {
          Street: 'Bellarmin St.',
          aptNum: '0000',
          City: 'Tampa',
          State: 'FL',
          PostalCode: '11112',
          Country: 'USA'
        },
        Vacancy: 4,
        Occupancy: 2,
        Gender: 'F'
      },
      {
        RoomId: '4',
        Location: 'Bellarmine',
        Address: {
          Street: 'Bellarmin St.',
          aptNum: '0010',
          City: 'Tampa',
          State: 'FL',
          PostalCode: '11112',
          Country: 'USA'
        },
        Vacancy: 5,
        Occupancy: 1,
        Gender: 'M'
      },
      {
        RoomId: '5',
        Location: 'Bellarmine',
        Address: {
          Street: 'Bellarmin St.',
          aptNum: '0020',
          City: 'Tampa',
          State: 'FL',
          PostalCode: '11112',
          Country: 'USA'
        },
        Vacancy: 0,
        Occupancy: 6,
        Gender: 'M'
      }
    ];
    return (rooms);
  }
}
