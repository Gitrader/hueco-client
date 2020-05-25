
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../lib/Auth';
import "./MyHueco.css"
import { Empty,Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

class MyHueco extends Component {
  state = { 
  
   availability:[], 
   isEmpty:false,
  
  
  };

  

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("state",this.state)
    const {
      availability
      } = this.state;

    this.props.myHueco(
     availability
      );
   
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { availability} = this.state;
    return (
      <div className="huecos">
        <h1>My Huecos</h1>

          {this.state.isEmpty?(
            null
          ):
            <div className="add-hueco">
          <Empty/> 
          <Button type="primary" icon={<PlusOutlined />}>
      Add a hueco
    </Button>
    </div>
    }


        {/* <form onSubmit={this.handleFormSubmit}>

          <label>Hueco 1:</label>
          <input type="text" name="hueco1" value={availability[0]} onChange={this.handleChange} />

          <label>Hueco 2:</label>
          <input type="text" name="hueco2" value={availability[1]} onChange={this.handleChange} />

          <label>Hueco 3:</label>
          <input type="text" name="hueco3" value={availability[2]} onChange={this.handleChange} />

          <label>Hueco 4:</label>
          <input type="text" name="hueco4" value={availability[3]} onChange={this.handleChange} />

          <label>Hueco 5:</label>
          <input type="text" name="hueco5" value={availability[4]} onChange={this.handleChange} />

          

          <input type="submit" value="myHuecos" />
        </form> */}

        
      </div>
    );
  }
}

export default withAuth(MyHueco);




