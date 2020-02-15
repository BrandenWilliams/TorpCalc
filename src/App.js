import React from "react"
import shipData from "./data/shipData.js"

class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            currentShipName: "Default",
            mass: "30",
            arch: "3",
            length: "150",
            time: "5",
            zoomed: false,
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.Distance = this.Distance.bind(this)
        this.handleShipChange = this.handleShipChange.bind(this)
        this.ShipMenu = this.ShipMenu.bind(this)

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value}); 
    }

    handleShipChange(event) {
        this.setState({currentShipName: event.target.value})
        const currentShipObject = shipData.filter(shipObj => {
            return shipObj.name === event.target.value
        })
        this.setState({
            mass: currentShipObject[0].mass,
            length: currentShipObject[0].length
        })
    }

    shipStatUpdate() {
        const currentShipObject = shipData.filter(shipObj => {
            return shipObj.name === this.state.currentShipName
        })
        this.setState({
            mass: currentShipObject[0].mass,
            length: currentShipObject[0].length
        })
    }

    ShipMenu() {
        const menuData = shipData.map((
            item) =>
                <option
                    key={item.shipid} 
                    value={item.name}
                >{item.name}
                </option>
        )
        
        return(
            <form>
                <label>
                    <select 
                        value={this.state.currentShipName} 
                        onChange={this.handleShipChange}
                    >{menuData}
                    </select>
                </label>
            </form>        
        )
    }

    Distance(){
        const distance = (this.state.mass / this.state.arch)
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
                    <p>mass height / Arch height = Distance </p>
                    <p>{this.state.mass} / {this.state.arch} = {distance}</p>
                </form>
            </div>
        )
    }

    Speed(){
        const speed = ""
        this.state.zoomed === true ?
        this.speed = (this.state.length / this.state.time) * 2
        :
        this.speed = this.state.length / this.state.time
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
                <p>{this.state.length} / {this.state.time} = {speed}</p>
            </div>        
        )
    }

    render() {
        return (
            <div>
                <this.ShipMenu />
                <hr/>
                <this.Distance />

                <this.Speed />
            </div>
        )
    }

}

export default App