import React from "react"

class Speed extends React.Component {

    constructor(prop){
        super()
        this.state = {
            time: prop.timeP,
            length: prop.lengthP,
            zoomed: prop.zoomP
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        })
    }

    render() {
        this.state.zoomed === true ?
        this.speedCalc = (this.state.length / this.state.time) * 2
        :
        this.speedCalc = this.state.length / this.state.time
        return (
            <div>
                Enter Your Targets Length: 
                <input 
                    type="number"
                    value={this.state.length}
                    name="length"
                    onChange={this.handleChange}
                />
                Enter Time: 
                <input 
                    type="number"
                    value={this.state.time}
                    name="time"
                    onChange={this.handleChange}
                />
                Zoomed: 
                <input 
                    type="checkbox"
                    name="zoomed"
                    checked={this.state.zoomed === true}
                    onChange={this.handleChange}
                />
                <p>Target Length / Time = Speed  (Zoom x2) </p>
                <p>{this.state.length} / {this.state.time} = {this.speedCalc}</p>
            </div>
            
        )
    }


}

export default Speed