import { useDispatch, useSelector } from 'react-redux';

import { CardProps } from '../types/shared';
import {
  selectIsCardSelected,
  addCard,
  removeCard,
} from '../app/slices/selectedCardsSlice';

const CheckBox = ({ uid, name, type }: CardProps) => {
  const dispatch = useDispatch();
  const isSelected = useSelector(selectIsCardSelected(uid));

  const handleCheck = () => {
    if (isSelected) {
      dispatch(removeCard(uid));
    } else {
      dispatch(
        addCard({
          uid,
          name,
          astronomicalObjectType: type,
        })
      );
    }
  };

  console.log(`Checkbox ${uid} isSelected:`, isSelected);

  return (
    <input
      type="checkbox"
      checked={isSelected}
      onChange={handleCheck}
      onClick={(e) => e.stopPropagation()}
    />
  );
};

export default CheckBox;
