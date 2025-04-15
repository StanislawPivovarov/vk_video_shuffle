import React from "react";
import styles from './styles.module.scss'
import logo from '../../assets/LOGO.svg'
import dropdown from '../../assets/dropdown.svg'
import logout from '../../assets/exit.svg'
import { Button, Col, Popover, Row } from "antd";


const Header = () => {

 const isAuth = true

 const userInfo = {
  "user_id": "202362751",
  "first_name": "Stanislav",
  "last_name": "Pivovarov",
  "avatar": "https://sun9-67.userapi.com/s/v1/ig2/9oKkv9zkHJFwffW21YBvH8RQDzkIgB0ZsUhDAOhbW15l3PF3FgM2lGRsw4jHTHR_TMd3QAnad1gyFLQMxciug-0L.jpg?quality=95&crop=0,98,1024,1024&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&cs=50x50",
  "sex": 2,
  "verified": false,
  "birthday": "10.11.2000"
 }
 const content = (
  <div>
   <Button className={styles.logout_btn} type="link">

    <img src={logout} alt="logout" />
    Выйти
   </Button>
  </div>
 );




 return (
  <div className={styles.header}>
   <Row justify={'center'} align={'middle'} style={{ height: '100%' }}>
    <Col span={12}>
     <Row align={'middle'} justify={'space-between'}>
      <Col>
       <img className={styles.logo} src={logo} alt="" />
      </Col>
      {
       isAuth ?
        <Col>
         <Popover placement="bottomRight" trigger={'click'} content={content}>
          <Button type="link">
           <img className={styles.avatar} src={userInfo.avatar} alt="avatar" />
           <img className={styles.dropdown} src={dropdown} alt="dropdown" />
          </Button>
         </Popover>
        </Col>
        :
        <></>
      }
     </Row>
    </Col>
   </Row>
  </div>
 )
}

export default Header;
