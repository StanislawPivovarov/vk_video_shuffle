import React, { useEffect, useState } from 'react';
import { Button, Checkbox, CheckboxProps, Col, Input, Row } from 'antd';
import * as VKID from '@vkid/sdk';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import styles from './styles.module.scss'
import search from '../../assets/search.svg'
import playlist from '../../assets/playlist.svg'
import VKIDFloatingOneTap from '../../components/VkAuth';
import playlistApi from '../../api/api';

function Main() {

 const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

  const [myPlaylistId, setMyPlaylistId] = useState(0)
  const [friendId, setFriedId] = useState(0)
  const [friendsPlaylist, setFriendsPlaylistId] = useState(0)

  VKID.Config.init({
    app: 53306336, // это client_id из VK OAuth приложения
    redirectUrl: "https://stanislawpivovarov.github.io/vk_video_shuffle/", // важно указать протокол!`
    // redirectUrl: "localhost", // важно указать протокол!`
    scope: 'video',
    responseMode: VKID.ConfigResponseMode.Callback
  });

  const { access_key } = useAppSelector((state) => state.user);


  const handleLoadMyPlaylist = () => {
    playlistApi.getMyPlaylist(myPlaylistId, access_key)
    .then((res) => {
      console.log(res)
    })
  }

  const handleLoadFriendPlaylist = () => {
    playlistApi.getPlaylist(friendId, friendsPlaylist, access_key)
    .then((res) => {
      console.log(res)
    })
  }

 return (
  <div className="App">
   <VKIDFloatingOneTap/>
   <Row justify={'center'}>
    <Col span={12}>
     <Row justify={'space-between'}>
      <Col span={11}>
       <div className={styles.video_block}>
        <Input onChange={(e) => setMyPlaylistId(parseInt(e.target.value))} prefix={<img alt='search' src={search}/>} placeholder='ID вашего лейлиста'/>
        <Button onClick={handleLoadMyPlaylist} className={styles.search_btn}>Найти</Button>
       </div>
      </Col>
      <Col span={11}>
       <div className={styles.video_block}>
       <Input onChange={(e) => setFriedId(parseInt(e.target.value))} prefix={<img alt='search' src={search}/>} placeholder='ID друга'/>
       <Input onChange={(e) => setFriendsPlaylistId(parseInt(e.target.value))} prefix={<img alt='search' src={search}/>} placeholder='ID плейлиста друга'/>
       <Button onClick={handleLoadFriendPlaylist} className={styles.search_btn}>Найти</Button>

       </div>
      </Col>
      <Col span={24}>
       <div className={styles.video_block}>
       <Input prefix={<img alt='search' src={playlist}/>} placeholder='Название нового плейлиста'/>
       <Checkbox className={styles.checkbox} onChange={onChange}>Randomize!</Checkbox>
       <Button className={styles.search_btn}>Shuffle!</Button>
       </div>
      </Col>
     </Row>
    </Col>
   </Row>
  </div>
 );
}

export default Main;