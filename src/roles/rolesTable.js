import React from 'react'
import {Table} from "antd";
import {connect} from "react-redux";
import {getRolesList} from "./reducers/roles.reducers";
import * as axios from "axios";


class RolesTable extends React.Component {

    componentDidMount = async() => {

        this.props.getRolesList(await axios.get('http://localhost:3004/roles')
            .then( (response) =>  {
                return {roles: response.data};
            }));
    };


    render() {
        return (
            <Table dataSource={this.props.rolesList} columns={this.props.rolesColumns}/>
        )
    }
}


let mapStateToProps = (state) => {



    return {
        rolesList: state.reducersRoles.roles.rolesList,
        rolesColumns: state.reducersRoles.roles.rolesColumns,
    }
};


let mapDispatchToProps = (dispatch) => {
    return {

        getRolesList: (vvv)=> {
            dispatch(getRolesList(vvv));
        },
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(RolesTable);

