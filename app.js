//Defining all the data
var allCardsData = [
  {name: "AMEX", score: 90, travel: 3, food: 2, other 1},
  {name: "Visa", score: 100, travel: 2, food: 1, other 1},
  {name: "CapitalOne", score: 80, travel: 4, food: 2, other 1},
  {name: "MasterCard", score: 78, travel: 2, food: 2, other 1},
  {name: "Chase", score: 95, travel: 1, food: 3, other 1},
  {name: "Citi", score: 88, travel: 2, food: 3, other 1},
];

var Control = React.createClass({
  render: function() {
    return <p> Sort by: <a>Name</a>, <a>Score</a>, <a>Travel</a>, <a>Food>, <a>Other</a> </p>
  }
})

var CardsList = React.createClass({
  getDefaultProps: function() {
    return {
      displayCards: []
    }
  },

  getInitialState: function() {
    return {
      cards: ''
    }
  }

})

//Rendering - This will start rendering to the webpage.
ReactDOM.render(
  <div>
    <h1>Hello React</h1>
    <CardsList>PlaceHolder Here - pass the props</CardsList>
  </div>
)
