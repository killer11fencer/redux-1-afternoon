import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store,{DELETE}from '../../store'

class Home extends Component {
  constructor(props) {
    const reduxState = store.getState()
    super(props);
    this.state = {
      recipes: reduxState.recipes
    };
  }
  componentDidMount() {
    store.subscribe(()=> {
      let reduxState = store.getState()
      this.setState({
        recipes: reduxState.recipes
      })
    })
  }
  deleteRecipe = (val) => {
    
    let filteredArr = this.state.recipes.filter(elem=>
      {return elem.name !== val})
     
      store.dispatch({type: DELETE, 
        payload: filteredArr
      })
  }


  render() {
   
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          delete={this.deleteRecipe}
          key={i}
          id={i +1}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.first_name}
          authorLast={recipe.last_name}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
