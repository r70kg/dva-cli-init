import React from 'react';
import { connect } from 'dva';
import Map from 'react-amap/lib/map';
import Marker from 'react-amap/lib/marker';
import InfoWindow from 'react-amap/lib/infowindow';



class MapContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            position: {
                longitude: 120,
                latitude: 30
            }
        }
        this.windowEvents = {
            created: (iw) => {console.log(iw)},
            open: () => {console.log('InfoWindow opened')},
            close: () => {console.log('InfoWindow closed')},
            change: () => {console.log('InfoWindow prop changed')},
        }


    }

    randomPosition() {
        this.setState({
            position: {
                longitude: 120 + Math.random() * 2,
                latitude: 30 + Math.random() * 2,
            }
        })
    }
    componentDidMount(){

    }

    render() {
        return (
            <div id="mapContainer" style={{width:'7.5rem',height:500}}>
                <Map center={this.state.position}>
                    <Marker position={this.state.position} />
                    <InfoWindow
                        position={this.state.position}
                        visible={true}
                        events={this.windowEvents}
                    >
                    <p>This is a window</p>
                    </InfoWindow>
                </Map>
                <button onClick={() => { this.randomPosition() }}>Random Position</button>
            </div>
        )
    }
}


export default connect(()=>({

}))(MapContainer);
