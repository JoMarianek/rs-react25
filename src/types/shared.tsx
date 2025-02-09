export interface AstronomicalObject {
  uid: string;
  name: string;
  astronomicalObjectType: string;
  location: {
    name: string;
    astronomicalObjectType: string;
  };
}
