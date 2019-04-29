<template>
  <div id="app">
    <mapbox access-token="pk.eyJ1IjoiZXJ2YSIsImEiOiJjanViaGYycngwMjNsNDNxcHJ0cjYzeWI1In0.xIPcroAM34wvqSnibYE4hA"
:map-options="{
  style: style,
  center: [48.959023, 1.549372],
  zoom: 3,
  attributionControl: false,
  pitch: 90,
  bearing: -45
}"
@map-load="mapLoaded"
></mapbox>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';
// import geoData from '../assets/gold.json';

export default {
  name: 'Map',
  components: { Mapbox },
  data: function () {
    return {
      style: {
        version: 8,
        sources: {
          baseTiles: {
            type: "raster",
            tiles: [ "https://raw.githubusercontent.com/HDAT/hdat-frontend/master/src/assets/tiles/base/{z}/{x}/{y}.png" ],
            tileSize: 256
          }
        },
        layers: [{
          id: "baseTiles",
          type: "raster",
          source: "baseTiles",
          minzoom: 0,
          maxzoom: 14
        }]
      }
    }
  },



  methods: {
    mapLoaded(map) {

// eslint-disable-next-line
console.log(map);
// console.log(geoData);
      // map.addLayer({
      //   'id': 'room-extrusion',
      //   'type': 'fill-extrusion',
      //   'source': {
      //   'type': 'geojson',
      //   'data': geoData
      //   },

      //   'paint': {
      //   'fill-extrusion-color': 'orange',
      //   'fill-extrusion-height': 200,
      //   // 'fill-extrusion-height': ['get', 'cargovalues'],
      //   'fill-extrusion-base': 1000,
      //   // 'fill-extrusion-base': ['get', 'base_height'],
      //   'fill-extrusion-opacity': 0.5
      //   }
      // });

      // map.addSource('overLayer', {
      //   type: 'raster',
      //   tiles: ['https://raw.githubusercontent.com/HDAT/hdat-frontend/master/src/assets/tiles/overlay/{z}/{x}/{y}.png'],
      //   tileSize: 256
      // });
      // map.addLayer({
      //   'id': 'overlay',
      //   'type': 'raster',
      //   'source': 'overLayer',
      //   'layout': {
      //       'visibility': 'visible'
      //   }
      // });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';

#map {
  width: 100%;
  height: 100vh;
}
</style>
