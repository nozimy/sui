import React, { Component } from 'react';
import './LvHeader.css';

import { Grid, Icon } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'



const iconStyle = { fontSize: 32, color: '#ff3380' };

class LvHeader extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            current: 'mail', activeItem: 'ОДЕЖДА'

  
        };
        
        this.handleClick = this.handleClick.bind(this);
        
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    handleClick(e){
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }
  
  render() {
     
    return (
       <div>
          <header className="lvk-header">
          <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
                <div className="lvk-brand-wrapper">
                  <a href="/" className="lvk-header-brand">
                      <img src="https://lavka.club/assets/dist/img/logo.png"/>
                      <span className="lvk-header-title">Лавка Клуб<br/>
                      <span>Интернет Магазин товаров ручной работы</span></span>
                  </a>
              </div>
              <div className="search-bar">
                <form method="POST" action="/search">
                  <input type="hidden" name="type" value="render"/>
                  <div className="search-input-wrapper">
                    <input id="search-query" type="text" name="searchphrase" placeholder="Поиск товаров и мастерских"/>
                  </div>
                  <div className="search-button-wrapper">
                    <button><Icon name="search" /></button>
                  </div>
                </form>
              </div>
              <div className="header-right-block">
                <div>
                  <div className="lvk-user-controls-tab">
                    <a href="" data-toggle="modal" data-target="#authModal">Войти</a>
                  </div>
                  
                  <div className="lvk-main-header-menu">
                    <ul className="lvk-header-nav">
                      <li className="active"><a href="/personal/favourite">
                        <Icon style={iconStyle}  name="empty heart" />
                        <span className="text">Избранное</span></a>
                        </li>
                      <li>
                          <a href="/workshop-private/products">
                            <Icon style={iconStyle}  name="building outline" />
                            <span className="text">Мой	магазин</span>
                            </a>
                        </li>
                      <li><a href="/cart">
                      <Icon style={iconStyle}  name="cart" />
                      <span className="text">Корзина</span>
                      </a></li>
                    </ul>
                  </div>
                </div>
              </div>
              </Grid.Column>
        </Grid.Row>
        </Grid>
        </header>
        <div className='headCatLinks'>
        <Grid centered >
          <Grid.Row>
            <Grid.Column width={14}>
             <Menu pointing secondary>
              <Menu.Item name='ДЛЯ ДОМАШНИХ ПИТОМЦЕВ' active={this.state.activeItem === 'ДЛЯ ДОМАШНИХ ПИТОМЦЕВ'} onClick={this.handleItemClick} />
              <Menu.Item name='ПРОЧЕЕ' active={this.state.activeItem === 'ПРОЧЕЕ'} onClick={this.handleItemClick} />
              <Menu.Item name='ОДЕЖДА' active={this.state.activeItem === 'ОДЕЖДА'} onClick={this.handleItemClick} />
              <Menu.Item name='УКРАШЕНИЯ' active={this.state.activeItem === 'УКРАШЕНИЯ'} onClick={this.handleItemClick} />
              <Menu.Item name='ПРАЗДНИКИ' active={this.state.activeItem === 'ПРАЗДНИКИ'} onClick={this.handleItemClick} />
              <Menu.Item name='ДЛЯ ДОМА' active={this.state.activeItem === 'ДЛЯ ДОМА'} onClick={this.handleItemClick} />
              <Menu.Item name='ДЛЯ ДЕТЕЙ' active={this.state.activeItem === 'ДЛЯ ДЕТЕЙ'} onClick={this.handleItemClick} />
              <Menu.Item name='ИСКУССТВО' active={this.state.activeItem === 'ИСКУССТВО'} onClick={this.handleItemClick} />
              <Menu.Item name='ДЛЯ ТВОРЧЕСТВА' active={this.state.activeItem === 'ДЛЯ ТВОРЧЕСТВА'} onClick={this.handleItemClick} />
            </Menu>
          </Grid.Column>
        </Grid.Row>
        </Grid>
        </div>
           
      </div>
    );
  }
}


export default LvHeader;

  // <div className="breadcrumb-wrapper">
  //       <Row>
        
  //         <Col span={18} offset={3}>
          
  //           <Breadcrumb>
  //               <Breadcrumb.Item>Home</Breadcrumb.Item>
  //               <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
  //               <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
  //               <Breadcrumb.Item>An Application</Breadcrumb.Item>
  //             </Breadcrumb>  
        
  //         </Col>
          
  //       </Row>
  //       </div> 
