import React from 'react';
import s from './App.module.css';
import Users from "./users/users";
import Roles from "./roles/roles";
import {Link, Route} from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  return (


    <div className={s.app}>

        <ul>
            <li><Link to={'/roles'}>  Роли </Link></li>
            <li><Link to={'/users'}>  Пользователи </Link></li>
        </ul>

        <div className={s.rolesUsers}>
            <Route exact path='/roles' component={()=>(<Roles/>)}/>
            <Route exact path='/users' component={()=>(<Users/>)}/>
        </div>


    </div>

  );
}

export default App;
