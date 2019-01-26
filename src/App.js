import React, { Component } from 'react';

import './App.css';



import LvHeader from './components/LvHeader';
import LvFeed from './components/LvFeed/LvFeed';
import CardExampleCard from './components/CardExampleCard';
import LvAccaunt from './components/LvAccaunt';

import { Button, Icon } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// import { CSSTransitionGroup } from 'react-transition-group'
// <CSSTransitionGroup
//     transitionName="fade"
//     transitionEnterTimeout={300}
//     transitionLeaveTimeout={300}
//   >
// </CSSTransitionGroup>
//http://learnsemantic.com/developing/customizing.html
//https://semantic-ui.com/usage/theming.html

class App extends Component {
  state = { activeItem: 'home' }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state
    return (
      <Router>
      <div>
      
        <LvHeader />
         <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={3}>
            
            <Menu pointing secondary vertical>
            
              <Menu.Item as={Link} to='/feed' name='НОВОСТИ' active={activeItem === 'НОВОСТИ'} onClick={this.handleItemClick} />
              <Menu.Item as={Link} to='/account'name='ИЗМЕНИТЬ ПРОФИЛЬ' active={activeItem === 'ИЗМЕНИТЬ ПРОФИЛЬ'} onClick={this.handleItemClick} />
              
              <Menu.Item name='МОИ СООБЩЕНИЯ' active={activeItem === 'МОИ СООБЩЕНИЯ'} onClick={this.handleItemClick} />
              <Menu.Item name='МОИ ПОКУПКИ' active={activeItem === 'МОИ ПОКУПКИ'} onClick={this.handleItemClick} />
              <Menu.Item name='МОИ ПОДПИСКИ' active={activeItem === 'МОИ ПОДПИСКИ'} onClick={this.handleItemClick} />
              <Menu.Item name='ИЗБРАННОЕ' active={activeItem === 'ИЗБРАННОЕ'} onClick={this.handleItemClick} />
              <Menu.Item name='МОИ ПОДБОРКИ' active={activeItem === 'МОИ ПОДБОРКИ'} onClick={this.handleItemClick} />
              <Menu.Item name='МОЙ МАГАЗИН' active={activeItem === 'МОЙ МАГАЗИН'} onClick={this.handleItemClick} />
            </Menu>
            
              
            </Grid.Column>
            <Grid.Column width={7}>
            <div>
            
                <Route exact path="/feed" component={LvFeed}/>
                <Route path="/account" component={LvAccaunt}/>
              
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button primary>Primary</Button>
              <Button secondary>Secondary</Button>

              <CardExampleCard />
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
      
         
        </Grid>
        
      </div>
      </Router>
    );
  }
}

export default App;
