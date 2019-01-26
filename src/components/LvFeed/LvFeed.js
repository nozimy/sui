import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react'
import LvFeedEvent from './LvFeedEvent';
import axios from 'axios';

import feed from './mock';



const post = {
    key:1,
    labelImg:'https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg',
    userName:'Name',
    eventName:'added product',
    eventDate:'12.12.12',
    extraImages:[{produtcLink:'https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg', src: 'https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg'}],
    likes:12
}
const myFeed = [post]



class LvFeed extends Component {
    
    state = {
        events: []
    }
    
    componentDidMount(){
        //         axios.get('/api/user/feed') //http://localhost:3001/api/category/all
        // 			.then( response => {
        
        // 				this.setState({events: response.data});
        
        // 				this.forceUpdate();
        // 			});
        
    
        
        this.setState({events: feed.slice(0, 10)});
    }
 
    render(){
        const {events} = this.state
        
         return (
            <div>
                <h1>Новости</h1>
                <Feed size='large'>
                {
                  events.map(e => (
                    <LvFeedEvent
                        key={e.data._id}
                        labelImg={'https://lavka.club/'+e.author.workshopLogo}
                        userName={e.author.name}
                        eventName={e.action.type}
                        eventDate={e.data.published}
                        extraImages={[{produtcLink:e.data.url, src: 'https://lavka.club/'+e.data.previewImg}]}
                        likes={e.data.newlikes}
                    />
                  )) 
                }
               
                
                </Feed>
            </div>
        )
    }   
}

// <LvFeedEvent
//     key={e.data._id}
//     labelImg={e.author.workshopLogo}
//     userName={e.author.name}
//     eventName={e.action.type}
//     eventDate={e.data.published}
//     extraImages={[{produtcLink:e.data.url, src: e.data.previewImg}]}
//     likes={e.data.newlikes}
// />

// <LvFeedEvent
//                         key={e.key}
//                         labelImg={e.labelImg}
//                         userName={e.userName}
//                         eventName={e.eventName}
//                         eventDate={e.eventDate}
//                         extraImages={e.extraImages}
//                         likes={e.likes}
//                     />  

export default LvFeed