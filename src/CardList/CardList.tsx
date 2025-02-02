import { Component } from 'react';
import styles from './CardList.module.css';
import Card from './Card';

interface AstronomicalObject {
  uid: string;
  name: string;
  astronomicalObjectType: string;
}

class CardList extends Component<
  object,
  { data: AstronomicalObject[]; loading: boolean; error: string | null }
> {
  state = { data: [], loading: false, error: null };

  fetchData = async () => {
    this.setState({ loading: true });
    const url = 'https://stapi.co/api/v2/rest/astronomicalObject/search';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      this.setState({ data: json.astronomicalObjects, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: (error as Error).message });
      // console.error(error.message);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className={styles.cardList}>
        {this.state.loading ? (
          <div className={styles.spinner}></div>
        ) : (
          this.state.data.map((item: AstronomicalObject) => (
            <Card
              key={item.uid}
              name={item.name}
              type={item.astronomicalObjectType}
            />
          ))
        )}
      </div>
    );
  }
}

export default CardList;
