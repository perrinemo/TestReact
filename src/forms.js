import React from 'react';
import ReactDOM from 'react-dom';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            name: ''
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    changeName() {
        this.setState({name: this.state.value})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="word">Entre un mot :</label>
                    <input id="word" className="form-control" placeholder="banane" type="text" value={this.state.value} 
                    onChange={this.handleChange} />
                </div>
                
                <button type="submit" className="btn" onClick={this.changeName}>OK</button>

                <h3>{this.state.name}</h3>
            </form>
        );
    }
}