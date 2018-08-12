import React, { Component } from 'react';
import NavButton from './NavButton.jsx';
import PageContent from './PageContent.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'home'
    };
  }

  navigate(location) {
    console.log(this)
    this.setState({
      location: location
    });
  }

  render() {
    return (
    <div>
      <ul className="list-reset flex h-10 items-center">
        <li className='mr-1'>
          <NavButton navSelect={this.navClass} text='Home' location='home' navState={this.state.location} setState={p=>{this.setState(p)}}/>
        </li>
        <li className='mr-1'>
          <NavButton navSelect={this.navClass} text='Bookshelf' location='bookshelf' navState={this.state.location} setState={p=>{this.setState(p)}}/>
        </li>
        <li className='mr-1'>
          <NavButton navSelect={this.navClass} text='Profile' location='profile' navState={this.state.location} setState={p=>{this.setState(p)}}/>
        </li>
        <li className='mr-1'>
          <NavButton navSelect={this.navClass} text='Monkeys' location='monkeys' navState={this.state.location} setState={p=>{this.setState(p)}}/>
        </li>
        <li className='mr-1'>
          <NavButton navSelect={this.navClass} text='Bats' location='bats' navState={this.state.location} setState={p=>{this.setState(p)}}/>
        </li>
        <li className='mr-1'>
          <NavButton navSelect={this.navClass} text='Cats' location='cats' navState={this.state.location} setState={p=>{this.setState(p)}}/>
        </li>
        <li className='mr-1'>
          <NavButton navSelect={this.navClass} text='A Winner Is You' location='winner' navState={this.state.location} setState={p=>{this.setState(p)}}/>
        </li>
      </ul>
      <div className="text-center flex mb-4">
        <div className="w-1/6 bg-grey-light h-screen"></div>
        <div className="w-2/3 bg-grey h-screen">
          <PageContent location={this.state.location}/>
        </div>
        <div className='w-1/6 bg-grey-light h-screen'></div>
      </div>
    </div>
    );
  }
}

export default App;