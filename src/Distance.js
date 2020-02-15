import React from "react"

class Distance extends React.Component {

    constructor(prop){
        super()
        this.state = {
            mass: prop.massP,
            arch: prop.archP
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type} = event.target
        type === "number" ?
            this.setState({
                [name]: value
            })
            :
            console.log("error")
    }

    render() {
        this.distCalc = this.state.mass / this.state.arch
        return (
            <div>
                <form>
                    Enter Mass Height: 
                    <input 
                        type="number"
                        value={this.state.mass}
                        name="mass"
                        onChange={this.handleChange}
                    />
                    Enter Arch: 
                    <input 
                        type="number"
                        value={this.state.arch}
                        name="arch"
                        onChange={this.handleChange}
                    />
                    <p>mass height / Arch height = Distance</p>
                    <p>{this.state.mass} / {this.state.arch} = {this.distCalc}</p>
                </form>
            </div>
            
        )
    }


}

export default Distance