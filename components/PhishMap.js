import React, { useState, useEffect } from "react";
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerCluster from '@changey/react-leaflet-markercluster';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import 'leaflet/dist/leaflet.css';
import '@changey/react-leaflet-markercluster/dist/styles.min.css';

// let clusterGroup = new L.MarkerClusterGroup();
// let statusActive = L.featureGroup.subGroup(clusterGroup);
// let statusInactive = L.featureGroup.subGroup(clusterGroup);
// let statusUnknown = L.featureGroup.subGroup(clusterGroup);

// let overlays = {
//     'Active': statusActive,
//     'Inactive': statusInactive,
//     'Unknown': statusUnknown
// };

let LeafIcon = L.Icon.extend({
});

let active = new LeafIcon({
	iconUrl: './icons/pinGreen.png',
	shadowUrl: './icons/pinShadow.png',
	options: {
		iconSize: [26, 45],
		shadowSize: [42, 29],
		iconAnchor: [13, 44],
		shadowAnchor: [4, 26],
		popupAnchor: [0, -31]
	}
})

let unknown = new LeafIcon({
	iconUrl: './icons/pinOrange.png',
	shadowUrl: './icons/pinShadow.png',

	options: {
		iconSize: [26, 45],
		shadowSize: [42, 29],
		iconAnchor: [13, 44],
		shadowAnchor: [4, 26],
		popupAnchor: [0, -31]
	}
})

let inactive = new LeafIcon({
	iconUrl: './icons/pinRed.png',
	shadowUrl: './icons/pinShadow.png',

	options: {
		iconSize: [26, 45],
		shadowSize: [42, 29],
		iconAnchor: [13, 44],
		shadowAnchor: [4, 26],
		popupAnchor: [0, -31]
	}
})

// let layerControl = L.control.layers(baseLayers, overlays).addTo(map);

// const greenMarker = L.icon({
// 	iconUrl: greenFilledMarker,
// 	iconSize: [40, 40],
// 	iconAnchor: [20, 40],
// });

// const orangeMarker = L.icon({
// 	iconUrl: orangeFilledMarker,
// 	iconSize: [40, 40],
// 	iconAnchor: [20, 40],
// });

// const redMarker = L.icon({
// 	iconUrl: redFilledMarker,
// 	iconSize: [40, 40],
// 	iconAnchor: [20, 40],
// });	

// const LeafIcon = L.Icon.extend({
// 	options: {
// 		iconSize: [26, 45],
// 		shadowSize: [42, 29],
// 		iconAnchor: [13, 44],
// 		shadowAnchor: [4, 26],
// 		popupAnchor: [0, -31]
// 	}
// });

// let clusterGroup = new L.MarkerClusterGroup();
// let statusActive = L.featureGroup.subGroup(clusterGroup);
// let statusInactive = L.featureGroup.subGroup(clusterGroup);
// let statusUnknown = L.featureGroup.subGroup(clusterGroup);

// const activePin = L.Icon.extend({
// 	iconUrl: require('../public/icons/pinGreen.png').default,
// 	shadowUrl: require('../public/icons/pinShadow.png').default,
// 	options: {
// 		iconSize: [26, 45],
// 		shadowSize: [42, 29],
// 		iconAnchor: [13, 44],
// 		shadowAnchor: [4, 26],
// 		popupAnchor: [0, -31]
// 	}
// })

// const unknownPin = L.Icon.extend({
// 	iconUrl: require('../public/icons/pinOrange.png').default,
// 	shadowUrl: require('../public/icons/pinShadow.png').default,
// 	options: {
// 		iconSize: [26, 45],
// 		shadowSize: [42, 29],
// 		iconAnchor: [13, 44],
// 		shadowAnchor: [4, 26],
// 		popupAnchor: [0, -31]
// 	}
// })

// const inactivePin = L.Icon.extend({
// 	iconUrl: require('../public/icons/pinRed.png').default,
// 	shadowUrl: require('../public/icons/pinShadow.png').default,
// 	options: {
// 		iconSize: [26, 45],
// 		shadowSize: [42, 29],
// 		iconAnchor: [13, 44],
// 		shadowAnchor: [4, 26],
// 		popupAnchor: [0, -31]
// 	}
// })

const PhishMap = () => {
	const [map, setMap] = useState(null);

	useEffect(() => {
		if (map) {
			setInterval(function () {
				map.invalidateSize();
			}, 100);
		}
	}, [map]);

	return (
		<MapContainer
			center={[40, -100]}
			zoom={4}
			scrollWheelZoom={false}
			style={{ height: "30rem", width: "100%" }}
			whenCreated={setMap}
			attributionControl={false}
		// layers={[activePin, unknownPin, inactivePin]}
		>
			<TileLayer
				// url={`https://api.mapbox.com/styles/v1/lryanle/clddixr9y002o01qnr8o80m5s/wmts?access_token=pk.eyJ1IjoibHJ5YW5sZSIsImEiOiJjbDFyZXkxYXAxd25iM2xtbWpqbXloc25oIn0.m1YP7rRX94XJ8cUkzovOwA`}
				url={`https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHJ5YW5sZSIsImEiOiJjbDFyZXkxYXAxd25iM2xtbWpqbXloc25oIn0.m1YP7rRX94XJ8cUkzovOwA`}
				attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=& quot; https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
			/>
			<MarkerCluster>
				<Marker position={[52.2297, 21.0122]} icon={"active"} />
				<Marker position={[52.2297, 21.0122]} icon={"unknown"} />
				<Marker position={[52.2297, 21.0122]} icon={"inactive"} />
			</MarkerCluster>
		</MapContainer >
	);
};

export default PhishMap