import * as React from 'react';
import { render } from 'react-dom';

interface Props{
    address: string;
}

export default class FooterComponent extends React.Component<Props, {}> {
    render(){
        return (
            <h1>{this.props.address}</h1>
        );
    }
}
