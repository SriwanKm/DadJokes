import React, {Component} from 'react';
import axios from 'axios'

class Joke2 extends Component {
    state = {
            joke: ''
        }


    componentDidMount() {
        this.fetchJoke()
    }

    fetchJoke = () => {
        axios.get('https://icanhazdadjoke.com/', {
            headers: {Accept: "Application/json"}
        })
            .then(res =>  this.setState({ joke: res.data.joke}))
            .catch(err => console.log(err))
    }

    render() {
        // console.log(this.state.joke)
        return (
            <div>
                <div className="card mt-4">
                    <div className="card-header">
                        Dad Joke
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">The funniest joke</h5>
                        <p className="card-text">{this.state.joke}</p>
                        <a href="#" className="btn btn-primary text-white" onClick={this.fetchJoke}>Get more joke</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Joke2