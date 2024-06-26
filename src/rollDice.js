import React, {Component} from 'react';
import Die from './die';
import './rolldice.css'
class RollDice extends Component{

    static defaultProps = {
        sides: ["one", "two", "three", "four","five", "six"]
    };
    constructor(props){
        super(props);
        this.state = {die1: 'one', die2: 'one', rolling: false}
        this.roll = this.roll.bind(this);
    };
    roll(){
       const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
       const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
       this.setState({die1: newDie1, die2: newDie2, rolling: true});
       //after one sec set rolling to false
       setTimeout(() =>{
        this.setState({rolling: false});
       }, 1000)
    };
 
    render(){
        
        return(
            <div className="RollDice">
                <h1>Let's Play!</h1>
                <div className="RollDice-container">
                    <Die face={this.state.die1} shaking={this.state.rolling}/>
                    <Die face={this.state.die2} shaking={this.state.rolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        )
    
    }
};
export default RollDice;