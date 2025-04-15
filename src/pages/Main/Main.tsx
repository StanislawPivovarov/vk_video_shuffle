import React, { useEffect } from 'react';
import { Button, Checkbox, CheckboxProps, Col, Input, Row } from 'antd';
import * as VKID from '@vkid/sdk';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import styles from './styles.module.scss'
import search from '../../assets/search.svg'
import playlist from '../../assets/playlist.svg'
import VKIDFloatingOneTap from '../../components/VkAuth';

function Main() {

 const dispatch = useAppDispatch()
 const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

// VKID.Config.init({
//   app: 53306280,
//   redirectUrl: 'localhost:3000',
// });

 return (
  <div className="App">
   <VKIDFloatingOneTap/>
   <Row justify={'center'}>
    <Col span={12}>
     <Row justify={'space-between'}>
      <Col span={11}>
       <div className={styles.video_block}>
        <Input prefix={<img alt='search' src={search}/>} placeholder='ID вашего лейлиста'/>
        <Button className={styles.search_btn}>Найти</Button>
       </div>
      </Col>
      <Col span={11}>
       <div className={styles.video_block}>
       <Input prefix={<img alt='search' src={search}/>} placeholder='ID плейлиста друга'/>
       <Button className={styles.search_btn}>Найти</Button>

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