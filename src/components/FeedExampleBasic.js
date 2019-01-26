import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

const FeedExampleBasic = () => (
  <div>
  <h1>Новости</h1>
  <Feed size='large'>
    <Feed.Event>
      <Feed.Label>
        <img src='https://lavka.club/uploads/products-galleries/54fedb4003e3dac8125df75b/J1bTIB5OjY77KMY065faaccf930d40db2d33b58db8a3--podarki-k-prazdnikam-chehol-na-kruzhku.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://lavka.club/uploads/products-galleries/54fedb4003e3dac8125df75b/J1bTIB5OjY77KMY065faaccf930d40db2d33b58db8a3--podarki-k-prazdnikam-chehol-na-kruzhku.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images text>
          <a><img src='https://lavka.club/uploads/products-galleries/54fedb4003e3dac8125df75b/J1bTIB5OjY77KMY065faaccf930d40db2d33b58db8a3--podarki-k-prazdnikam-chehol-na-kruzhku.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products-galleries/55115215286b66df1f013cc8/3KvSdebGPZvo3pwERMGS8558-2%20logo.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <div>
          Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
          over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
          day soon.
          </div>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://lavka.club/uploads/products-galleries/54fedb4003e3dac8125df75b/J1bTIB5OjY77KMY065faaccf930d40db2d33b58db8a3--podarki-k-prazdnikam-chehol-na-kruzhku.jpg' />
      <Feed.Content>
        <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://lavka.club/uploads/products-galleries/54fedb4003e3dac8125df75b/J1bTIB5OjY77KMY065faaccf930d40db2d33b58db8a3--podarki-k-prazdnikam-chehol-na-kruzhku.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Joe Henderson</a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
          over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
          day soon.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://lavka.club/uploads/products-galleries/54fedb4003e3dac8125df75b/J1bTIB5OjY77KMY065faaccf930d40db2d33b58db8a3--podarki-k-prazdnikam-chehol-na-kruzhku.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Justen Kitsune</a> added <a>2 new photos</a> of you
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a><img src='https://lavka.club/uploads/products-galleries/54fedb4003e3dac8125df75b/J1bTIB5OjY77KMY065faaccf930d40db2d33b58db8a3--podarki-k-prazdnikam-chehol-na-kruzhku.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a><a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
          <a><img src='https://lavka.club/uploads/products/5a08c41e76768610da7fd4ee/KTIXZOQX9ex80MHw.jpg' /></a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
  </div>
)

export default FeedExampleBasic