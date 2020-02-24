import React from "react"
import shipData from "./data/shipData.js"
import "./index.css"

class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            currentShipName: "Default",
            shipSearch: "",
            mass: "30",
            centir: "3",
            length: "150",
            time: "5",
            zoomed: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleShipChange = this.handleShipChange.bind(this)
        this.ShipSearch = this.ShipSearch.bind(this)
        this.Distance = this.Distance.bind(this)
        this.Speed = this.Speed.bind(this)
        this.currentStats = this.currentStats.bind(this)
    }

    handleChange(event) {
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

    handleShipChange(event) {
        this.setState({currentShipName: event.target.value})
        const currentShipObject = shipData.filter(shipObj => {
            return shipObj.name === event.target.value
        })
        this.setState({
            mass: currentShipObject[0].mass,
            length: currentShipObject[0].length
        })
        this.setState({
            shipSearch: ""
        })
    }

    ShipSearch() {
        const slength = this.state.shipSearch.length
        const menuData = shipData.map(
            item => {
                const itemUP = item.name.toUpperCase()
                const compair = itemUP.slice(0, slength)
                if(compair === this.state.shipSearch.toUpperCase()){
                    return(
                        <option
                            key={item.shipid}
                            name="currentShipName" 
                            value={item.name}
                            onClick={this.handleShipChange}
                        >
                        {item.name}
                        </option>
                    )
                }
            }
        )
        if (this.state.shipSearch.length !== 0) {
            return (
                <div className="searchdrop">
                    <input 
                        type="text"
                        value={this.state.shipSearch}
                        name="shipSearch"
                        onChange={this.handleChange} 
                        placeholder = "Search.. " 
                    />
                   <div  className="dropitems"> {menuData} </div>
                </div>
            )
        }
        return (
            <div className="searchdrop">
                <input 
                    type="text"
                    value={this.state.shipSearch}
                    name="shipSearch"
                    onChange={this.handleChange} 
                    placeholder = "Search Ships... " 
                />
            </div>
        )
    }

    Distance(){
        return (
            <div>
                <form>
                    <div>
                        Enter Mass Height: 
                        <input 
                            type="number"
                            value={this.state.mass}
                            name="mass"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Enter Centiradians: 
                        <input 
                            type="number"
                            value={this.state.centir}
                            name="centir"
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }

    Speed(){
        return (
            <div>
                <form>
                    <div>
                        Enter Your Targets Length: 
                        <input 
                            type="number"
                            value={this.state.length}
                            name="length"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Enter Time: 
                        <input 
                            type="number"
                            value={this.state.time}
                            name="time"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Zoomed: 
                        <input 
                            type="checkbox"
                            name="zoomed"
                            checked={this.state.zoomed === true}
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>        
        )
    }
    
    currentStats(){
        const speed = this.state.zoomed === true ? 
        this.speed = (2*(this.state.length / this.state.time)) 
        : this.speed = (this.state.length / this.state.time)
        const distance = (this.state.mass / this.state.centir)
        return (
            <div className="statbox"> 
                <div className="stat-title"> Current Stats</div>
                <div>Ship Name: {this.state.currentShipName}</div>
                <div>Ships Mass Height: {this.state.mass}m</div>
                <div>The Centiradians: {this.state.centir}</div>                
                <div>Ship Length: {this.state.length}m</div>
                <div>Time: {this.state.time} (in Seconds)</div>
                <div>Distance: {distance.toFixed(2)}m</div>
                <div>Speed: {speed.toFixed(2)} Kn</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <this.currentStats />
                <this.ShipSearch />
                
                <this.Distance />
                <this.Speed />
            </div>
        )
    }

}

export default App