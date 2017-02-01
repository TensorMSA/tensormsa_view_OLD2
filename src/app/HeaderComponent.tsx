import * as React from 'react';
import { render } from 'react-dom';

interface Props {
    title: string;
    address: string;
}

export default class HeaderComponent extends React.Component<Props, {}> {
    render(){
        return (
            <h1>{this.props.title}</h1>
        );
    }
}
