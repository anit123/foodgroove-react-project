import React, { Component } from 'react'
import './Food.scss'

export default class Food extends Component {
    state={
        showinfo:false,
    }
    handleInfo=()=>{
        this.setState({
            showinfo:!this.state.showinfo,
        })
    }
    render() {
        const {id, foodName, img,info}=this.props.food;
        const {removeFood}=this.props; // For remove button this has been assigned as props 
        return (
           <article className="food">
               <div className="img-container">
                   <img src={img} alt="name food"/>
                  {/* line no 15 remove food has been taken as function */}
                   <span className="close-btn" onClick={()=>removeFood(id)}> 
                   
                   <i class="fas fa-window-close"/>
                   </span>
               </div>
                <div className="food-info">
                <h3>{foodName}</h3>
                <h4>
                    info{""}
                    <span onClick={this.handleInfo}>
                    <i class="fas fa-caret-square-down"/>
                    </span>
                </h4>
                    {this.state.showinfo && <p>{info}</p> }
                </div>
           </article>
        )
    }
}
