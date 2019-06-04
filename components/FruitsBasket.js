const FruitsBasket = ({ filteredFruits }) => {
  return (
    <ul>
      {filteredFruits.map(fruit => {
        return <li key={fruit.type}>{fruit.type}</li>;
      })}
    </ul>
  );
};
