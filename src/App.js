import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./App.css"; // Create a new file App.css in the same directory and add custom CSS styles

mapboxgl.accessToken = "pk.eyJ1IjoidnNyLTIzIiwiYSI6ImNsanNuaGRuNTBlc3QzbG11aDA5bWF4cmcifQ.m4N3QPEdWjtg6QHYLoeNBQ";

const App = () => {
  useEffect(() => {
    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v10",
        center: [-74.5, 40],
        zoom: 9,
      });

      const markerElement = document.createElement("div");
      markerElement.className = "marker";

      const marker = new mapboxgl.Marker(markerElement).setLngLat([-74.5, 40]).addTo(map);
    };

    if (!mapboxgl.accessToken) {
      console.error("Mapbox access token not set.");
    } else {
      initializeMap();
    }
  }, []);

  return <div id="map" />;
};

export default App;
