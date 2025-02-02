import { Component } from 'react';
import styles from './CardList.module.css';
import Card from './Card';

interface AstronomicalObject {
  uid: string;
  name: string;
  astronomicalObjectType: string;
}

class CardList extends Component<
  { searchTerm: string },
  { data: AstronomicalObject[]; loading: boolean; error: string | null }
> {
  state = { data: [], loading: false, error: null };

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    const url = 'https://stapi.co/api/v2/rest/astronomicalObject/search';

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      const allData = json.astronomicalObjects;

      const filteredData = this.props.searchTerm
        ? allData.filter((item: AstronomicalObject) =>
            item.name
              .toLowerCase()
              .includes(this.props.searchTerm.toLowerCase())
          )
        : allData;

      this.setState({ data: filteredData, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: (error as Error).message });
      // console.error(error.message);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: { searchTerm: string }) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.fetchData();
    }
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
