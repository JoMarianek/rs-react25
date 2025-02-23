import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SelectedCard {
  uid: string;
  name: string;
  astronomicalObjectType: string;
}

interface SelectedCardsState {
  selectedCards: SelectedCard[];
}

const initialState: SelectedCardsState = {
  selectedCards: [],
};

const selectedCardsSlice = createSlice({
  name: 'selectedCards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<SelectedCard>) => {
      const exist = state.selectedCards.some(
        (card) => card.uid === action.payload.uid
      );
      if (!exist) {
        state.selectedCards.push(action.payload);
      }
    },
    removeCard: (state, action: PayloadAction<string>) => {
      state.selectedCards = state.selectedCards.filter(
        (card) => card.uid !== action.payload
      );
    },
    clearAllCards: (state) => {
      state.selectedCards = [];
    },
  },
});

export const { addCard, removeCard, clearAllCards } =
  selectedCardsSlice.actions;

export const selectedCards = (state: RootState) =>
  state.selectedCards.selectedCards;
export const selectSelectedCardsCount = (state: RootState) =>
  state.selectedCards.selectedCards.length;
export const selectIsCardSelected = (uid: string) => (state: RootState) =>
  state.selectedCards.selectedCards.some((card) => card.uid === uid);

export default selectedCardsSlice.reducer;
