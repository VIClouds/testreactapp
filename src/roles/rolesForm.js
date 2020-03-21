import React from 'react'
import {Form, Input} from "antd";
import s from './roles.module.css';
import Button from "antd/es/button";
import {addRole} from "./reducers/roles.reducers";
import {connect} from "react-redux";
import * as axios from "axios";
import { v4 as uuidv4 } from 'uuid';

class RolesForm extends React.Component {
    formRef = React.createRef();

    layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 18,
        },
    };

    tailLayout =  {
        wrapperCol: {offset: 2, span: 20}
    };

    onAddNewRole = async (value) => {

            // await axios.post('http://localhost:3004/roles', {
            //         key: uuidv4(), Name: value.name
            //     }
            // )
            //     .then( (response) =>  {
            //         console.log(response);
            //     });

        this.props.addRole(value.name);
        this.formRef.current.resetFields();
    };


    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    render() {

        return (

            <div className={s.rolesFrom}>
                <Form name="basic"
                      {...this.layout}

                      initialValues={{
                          remember: true,
                      }}
                      ref={this.formRef}

                      onFinish={ this.onAddNewRole}
                      onFinishFailed={this.onFinishFailed}

                >
                    <Form.Item label="Id" name="id">
                        <Input disabled={true} style={{display: 'block', width: '100%'}}/>
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name',
                            },
                        ]}

                    >
                        <Input  />
                    </Form.Item>

                    <Form.Item {...this.tailLayout}>
                        <Button className={s.rolesSubmit} type="primary" htmlType="submit" style={{}}>
                            Добавить роль
                        </Button>
                    </Form.Item>
                </Form>

            </div>
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

        addRole: (name)=> {
            dispatch(addRole(name));
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RolesForm);





