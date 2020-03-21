import React from 'react'
import s from './roles.module.css';
import RolesForm from './rolesForm';
import RolesTable from "./rolesTable";

class Roles extends React.Component {

    render() {

        return (
            <div className={s.roles}>
                Роли

                <div className={s.rolesFrom}>
                    <RolesForm />
                </div>

                <div className={s.rolesTable}>
                    <RolesTable/>
                </div>
            </div>
        )

    }

}

export default Roles