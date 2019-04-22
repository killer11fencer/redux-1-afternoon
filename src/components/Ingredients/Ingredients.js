import React, { Component } from "react";
import store, {INGREDIENTS} from '../../store'
import { Link } from "react-router-dom";

class Ingredients extends Component {
  constructor(props) {
    let reduxState = store.getState()
    super(props);
    this.state = {
      ingredients: reduxState.ingredients,
      input: reduxState.userInput
    };
  }
  componentDidMount() {
    store.subscribe(()=>
    { const reduxState = store.getState()
    this.setState({ingredients: reduxState.ingredients})
      
    })
  }
  handleChange(val) {
    this.setState({
      input: val
    });
  }
  addIngredient() {
    store.dispatch({
      type: INGREDIENTS,
      payload: this.state.input
    })
    this.setState({
      input: ""
    });
  }
  render() {
    const ingredients = this.state.ingredients.map((ingredient, i) => {
      console.log('goign goign',ingredient)
      return <li key={i}>{ingredient}</li>;
    });
    return (
      <div className="List forms">
        <h2>Ingredients:</h2>
        <div className="form_items_container">
          <ul className='list'>{ingredients}</ul>
        </div>
        <div className="add_container">
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)}
          />
          <button
            className="add_button"
            onClick={() => this.addIngredient()}
          >
            Add Ingredient
          </button>
        </div>
        <Link to="/add/author">
          <button className="left_button">Previous</button>
        </Link>
        <Link to="/add/instructions">
          <button className="right_button">Next</button>
        </Link>
      </div>
    );
  }
}

export default Ingredients;
