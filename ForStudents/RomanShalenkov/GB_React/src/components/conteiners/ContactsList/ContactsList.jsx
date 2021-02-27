import React, { Component } from 'react';
import './style.scss';
import Modal from '@components/Modal';


export default class ContactsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            props,
        };
    }

    render() { 
        console.log(this.state);
        return <div className="contactslist">
            <Modal add={this.state.props}/>
        </div>;
    }
};

