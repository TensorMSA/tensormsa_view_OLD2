import * as React from 'react';
import { render } from 'react-dom';

export default class ContentComponent extends React.Component<{}, {}> {
    render(){
        return (
            <div>
                <h2>Content</h2>
                <p> Hey! </p>
            </div>
        );
    }
}

