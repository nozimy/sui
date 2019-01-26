import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

const eventTypes = {
    add_product: 'опубликовал новую работу',
    edit_product: 'edit_product',
    recommend: 'товар из города '
};
const getEventDesc = (evenName) => {
    if (evenName === 'recommend')
        //todo: return eventTypes[evenName] + user.city
        return eventTypes[evenName] 
    else 
        return eventTypes[evenName] 
}

const LvFeedEvent = (props) => (
  
    <Feed.Event>
      <Feed.Label>
      <a  href={"/"+props.userName} target='_blank'>
        <img src={props.labelImg} />
      </a>
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
        <a  href={"/"+props.userName} target='_blank'>
            <Feed.User>{props.userName} </Feed.User>
        </a>  {getEventDesc(props.eventName)} 
          <Feed.Date>{(new Date(props.eventDate).toLocaleDateString('ru-RU'))} </Feed.Date>
        </Feed.Summary>
        { 
        (!!props.extraImages && !!props.extraImages.length>0) ? 
        <Feed.Extra images>
        {props.extraImages.map(img => (
            <a href={img.produtcLink} target='_blank'><img src={img.src} /></a>
        ))}
        </Feed.Extra>
        : ''
        }
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            {props.likes}
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  
)

export default LvFeedEvent