import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItem }) => {
  let delay = 0.1;
  return (
    <div className="row">
      {fastFoodItem.map((fastfoods) => {
        delay += 0.03;
        return (
          <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastfoods.id}>
            <FastFoodItem {...fastfoods} delay={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
