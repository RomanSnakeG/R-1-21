
import React, { Component } from 'react';
import './style.scss';
import ContactsList from '@conteiners/ContactsList';
import ListContact from '@conteiners/ListContact';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class ChatsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            chatName: [
                {name: 'Admin'},
                {name: 'User1'},
                {name: 'User2'},
                {name: 'User3'},
            ],
        };
    }

    addChat = name => {
        this.setState({ chatName: [...this.state.chatName, { name, id: Date.now() }] });
    }

    render() { 
        const chatName = this.state.chatName.map( (el, i) => {
            return <ListItem button key = { 'userID' + i }>
                <ListItemText primary={ el.name } />
            </ListItem>
        });
        return <div className="chatslist">
                <ListContact add={ this.addChat } />
                { chatName }
        </div>;
    }
};
