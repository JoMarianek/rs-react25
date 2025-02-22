const CheckBox = () => {
  return (
    <input
      type="checkbox"
      onClick={(e) => {
        e.stopPropagation();
      }}
    />
  );
};

export default CheckBox;
