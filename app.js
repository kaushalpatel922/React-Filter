//Defining all the data
var allCardsData = [
  {name: "A", score: 90, t: 3, f: 2, ot: 1},
  {name: "V", score: 100, t: 2, f: 1, ot: 1},
  {name: "C", score: 80, t: 4, f: 2, ot: 1},
  {name: "M", score: 78, t: 2, f: 2, ot: 1},
  {name: "C", score: 95, t: 1, f: 3, ot: 1},
  {name: "C", score: 88, t: 2, f: 3, ot: 1},
];

var Control = React.createClass({
  render: function() {
    return <p> Sort by: <a href onClick={this.props.onClickName}>Name</a>, <a href onClick={this.props.onClickS}>S</a>, <a href onClick={this.props.onClickT}>T</a>, <a href onClick={this.props.onClickF}>F</a>, <a href onClick={this.props.onClickOt}>Ot</a></p>
  }
});

var CardsList = React.createClass({
  getDefaultProps: function() {
    return {
      displayCards: []
    }
  },

// Defining initial state for the card score
  getInitialState: function() {
    return {
      cards: this.props.displayCards.sort(function(a,b) {
        return (a.score < b.score) ? 1: -1;
      })
    };
  },

  //sort the card by alphabatical order
  sortByName: function(e) {
    this.setState({
      cards: this.props.displayCards.sort(function(a,b) {
        return b.name < a.name;
      })
    });
    e.preventDefault();
  },
  sortByScore: function(e) {
    this.setState({
      cards: this.props.displayCards.sort(function(a,b) {
        return b.score - a.score;
      })
    });
    e.preventDefault();
  },
  sortByT: function(e) {
    this.setState({
      students: this.props.displayCards.sort(function(a,b) {
        return b.t > a.t;
      })
    });
    e.preventDefault();
  },
  sortByF: function(e) {
    this.setState({
      students: this.props.displayCards.sort(function(a,b) {
        return b.f > a. f;
      })
    });
    e.preventDefault();
  },
  sortByOt: function(e) {
    this.setState({
      students: this.props.displayCards.sort(function(a,b) {
        return b.ot > a.ot;
      })
    })
  },
  render: function() {
    return (
      <div>
        <Control onClickName={this.sortByName} onClickScore={this.sortByScore} onClickT={this.sortByT} onClickF={this.sortByF} onClickOt={this.sortByOt} />
        <ul>
          {this.state.cards.map(function(e) {
            return <li>{e.score} - {e.name} - {e.t} - {e.f} - {e.ot}</li>
          })}
        </ul>
      </div>
    )
  }
});

//Rendering - This will start rendering to the webpage.
ReactDOM.render(
  <div>
    <h1>Hello React</h1>
    <CardsList displayCards={allCardsData}/>
  </div>,
  document.getElementById('main')
);
