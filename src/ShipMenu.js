import React, { Component } from "react"
import shipData from "./data/shipData.js"

class ShipMenu extends Component {
    constructor(prop) {
        super()
        this.state = {
            shipname: prop.shipname
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({shipname: event.target.value});
        // const currentShip = this.prop.filter(shipObj => {
        //     return shipObj.name === event.target.value
        // })
        // console.log(currentShip) 
    }

    render () {
        const menuData = shipData.map(
            item =>
                <option selected
                    key={item.shipid} 
                    value={item.name}
                >{item.name}
                </option>
        )        
        return(
            <form>
                <label>
                    <select 
                        value={this.state.shipname} 
                        onChange={this.handleChange}
                    >{menuData}
                    </select>
                </label>
            </form>        
        )
    }

}

export default ShipMenu