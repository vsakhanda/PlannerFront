import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Point } from './point';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const points = [
      // { id: 12, name: 'Dr. Nice' },
      // { id: 13, name: 'Bombasto' },
      // { id: 14, name: 'Celeritas' },
      // { id: 15, name: 'Magneta' },
      // { id: 16, name: 'RubberMan' },
      // { id: 17, name: 'Dynama' },
      // { id: 18, name: 'Dr. IQ' },
      // { id: 19, name: 'Magma' },
      // { id: 20, name: 'Tornado' },
      { id: 12, name: 'Троя ', latitude: 30, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 13, name: 'Ісмар', latitude: 31, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 14, name: 'Країна лотоса', latitude: 32, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 15, name: 'Острів циклопів', latitude: 33, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 16, name: 'Еолія', latitude: 34, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 17, name: 'Телепіл', latitude: 35, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 18, name: 'Еея', latitude: 36, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 19, name: 'Підземне царство Аіда', latitude: 37, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 20, name: 'Острів сирен', latitude: 38, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 21, name: 'Сцілла і Харібда', latitude: 39, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 22, name: 'Трінакія', latitude: 40, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 23, name: 'Острів Огіггія', latitude: 41, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 24, name: 'Острів сирен', latitude: 42, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 25, name: 'Схерія', latitude: 43, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  },
      { id: 26, name: 'Ітака', latitude: 44, longitude: 20, link: "www", description: "point description", regions: "Greece", phone_number: "0", point_adress: "Troja", district: "Europe", power: "10", alterEgo: "fire"  }

    ];
    return {points};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the points array is empty,
  // the method below returns the initial number (11).
  // if the points array is not empty, the method below returns the highest
  // hero id + 1.
  genId(points: Point[]): number {
    return points.length > 0 ? Math.max(...points.map(point => point.id)) + 1 : 11;
  }
}
