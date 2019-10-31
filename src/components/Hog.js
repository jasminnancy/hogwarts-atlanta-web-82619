import React from 'react';
import HogInfo from './HogInfo'

class Hog extends React.Component {

    state = {
        displayData: false
    }

    showDetails = () => {
        this.setState({
            displayData: !this.state.displayData
        })
    }

    sluggify = this.props.piggy.name.toLowerCase().split(" ").join("_") + ".jpg"

    render () {
        return (
            <div onClick={() => this.showDetails()} className="ui eight wide column">
                <div className="ui card">
                    <div className="content">
                        <div className="header">{(this.props.piggy.name)}</div>
                        <div className="description">{this.state.displayData ? <HogInfo piggy={this.props.piggy}/> : <img src={require(`../hog-imgs/${this.sluggify}`)} alt={this.props.piggy.name}></img>}</div>
                    </div>
                </div>
            </div>
            
        )
       
    }
}

export default Hog