export interface AstronomicalObject {
  uid: string;
  name: string;
  astronomicalObjectType: string;
  location: {
    name: string;
    astronomicalObjectType: string;
  };
}

export interface CardProps {
  name: string;
  type: string;
  uid: string;
}
