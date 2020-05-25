
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../lib/Auth';
import "./MyHueco.css"
import { Empty,Button,TimePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import moment from 'moment';
import './AddHueco.css'

class AddHueco extends Component {
  state = { 
  
   availability:[], 
   isEmpty:false,
  
  
  };

  onChange(time, timeString) {
    console.log(time, timeString);
  }

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
      <div className="add-huecos">
        <h1>Add Huecos</h1>
        <p>Select your empty timeslots for today and press add to display them to your futur customers. You can display maximum 5 huecos per day.</p>

<div className="hueco-container">
        <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} className="timepicker"/>
        {/* <Button type="primary" icon={<PlusOutlined />}>
          <Link to={"/private"} className="link-hueco">
      Add 
      </Link>
    </Button> */}
</div>

<div className="hueco-container">
    <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} className="timepicker"/>
        {/* <Button type="primary" icon={<PlusOutlined />}>
          <Link to={"/private"} className="link-hueco">
      Add 
      </Link>
    </Button> */}
</div>
<div className="hueco-container">
    <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} className="timepicker"/>
        {/* <Button type="primary" icon={<PlusOutlined />}>
          <Link to={"/private"} className="link-hueco">
      Add 
      </Link>
    </Button> */}
</div>

<div className="hueco-container">
    <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} className="timepicker"/>
        {/* <Button type="primary" icon={<PlusOutlined />}>
          <Link to={"/private"} className="link-hueco">
      Add 
      </Link>
    </Button> */}
</div>

<div className="hueco-container">
    <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} className="timepicker"/>
        {/* <Button type="primary" icon={<PlusOutlined />}>
          <Link to={"/private"} className="link-hueco">
       Add 
      </Link>
    </Button> */}
</div>
          <div className="hueco-container">
          <Button type="primary" icon={<PlusOutlined />}>
          <Link to={"/private"} className="link-hueco">
    Add my huecos now!
      </Link>
    </Button>
    </div>
      </div>

    )};
  }


export default withAuth(AddHueco);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
// import { TimePicker } from 'antd';
// import moment from 'moment';

// function onChange(time, timeString) {
//   console.log(time, timeString);
// }

// ReactDOM.render(
//   <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
//   document.getElementById('container'),
// );

