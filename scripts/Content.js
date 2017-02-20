import * as React from 'react';

import { Button } from './Button';
import { Socket } from './Socket';

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'messages': []};
        
    }
    
    componentDidMount() {
        Socket.on('all messages', (data) => {
            this.setState({
                'messages': data['messages']
            });
        });
    }
    
    render() {
        let messages = this.state.messages.map((n, index) => 
            <li key={index}>
                <img src={n.picture} />
                {n.name}: {n.message}
            </li>
         );
        console.log(messages);
        return (
            <div>
                <div>
                     <h1>Message</h1>
                     <ul>{messages}</ul>
                     <div
                         className="fb-login-button"
                         data-max-rows="1"
                         data-size="large"
                         data-show-faces="true"
                         data-auto-logout-link="true">
                     </div>
                     <div
                        className="g-signin2"
                        data-theme="dark">
                     </div>
                     <Button />
                 </div>
            </div>
        );
    }
}
