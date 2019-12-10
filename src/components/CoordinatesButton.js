import React from 'react'

class CoordinatesButton extends React.Component {

    coord = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]) 
    }
    
    render(){
        return (
            <div>
                <button onClick={this.coord}>Coordinates</button>
            </div>
        )
    }

}

export default CoordinatesButton 