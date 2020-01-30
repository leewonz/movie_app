import React from 'react';
import PropTypes from "prop-types";

const itemList = [
  {
    id: 1,
    name: "potato",
    image:
      "https://d27ucmmhxk51xv.cloudfront.net/media/english/illustration/potato.jpg?version=1.1.96",
    rating: 5
  },
  {
    id: 2,
    name: "orange",
    image: 
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Orange-Whole-%26-Split.jpg/800px-Orange-Whole-%26-Split.jpg",
    rating: 4
  },
  {
    id: 3,
    name: "beef",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/4/1/BX1501_Roast-Filet-of-Beef_s4x3.jpg.rend.hgtvcom.826.620.suffix/1538677423309.jpeg",
    rating: 5
  }
];

function Food(props){
  return (
  <div>
    <h3>I love {props.name}!</h3>
    <img src={props.picture} alt={props.name} />
    <h4>{props.rating} / 5.0</h4>
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div className="App">
    {itemList.map(dish => (
      <Food 
        key = {dish.id}
        name = {dish.name}
        picture = {dish.image}
        rating = {dish.rating}
      />
    ))}
    </div>
  );
}

export default App;
