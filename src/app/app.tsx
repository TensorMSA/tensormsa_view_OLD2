import * as React from 'react';
import { render } from 'react-dom';
import Header from './HeaderComponent';
import Content from './ContentComponent';
import Footer from './FooterComponent';
import '../scss/style.scss';

interface Props {
    title: string;
    address: string;
}

class App extends React.Component<Props, {}> {
    
    render(){
        return  (
            <div>
                <Header title={this.props.title}/>
                <Content/>
                <Footer address={this.props.address}/>
            </div>
        );
    }
}

render(<App title="Hoyai" address="경기도"/>, document.getElementById("main"));