import React, { Component } from 'react';
import Food from '../Food';
import './foodlist.scss';
import {fooddata} from "../../fooddata";


export default class FoodList extends Component {
    state={
        foods:fooddata,
    };
    removeFood=id=>{
       const{foods}=this.state;
       const shortFoods=foods.filter(food=>food.id !==id)
       this.setState({
           foods:shortFoods,
       })
    }

    render() {
        // console.log(this.state.foods)
        const{foods}=this.state
        return (
            <section className="foodlist">
               {
                   foods.map(food=>(<Food key={food.id} food={food} removeFood={this.removeFood}/>))
               }
                
            </section>
        )
    }
}
