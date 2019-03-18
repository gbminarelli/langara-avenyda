<template>
  <div class="map">
    <!-- <div class="searchParking">
      <h2>Find a parking spot in Canada on Avenyda {{storedMarkers.data[0].latitud}} {{storedMarkers.data[0].longitud}}</h2>
      <h2 v-for="marker in storedMarkers" :key="marker.id">
        Marker with ID = {{marker.id}}: {{marker.latitud}}, {{marker.longitud}}
      </h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="">Add</button>
      </label>
      <br/>

    </div> -->
    <br>
    <gmap-map
      :center="center"
      :zoom="18"
      v-bind:options="mapStyle"
      style="width:100%;  height: 70vh; margin-top:-5vh;">

      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <MarkerWindow :price="infoPrice" />
        <!-- <div class="">
          {{infoPrice}}
        </div> -->
      </gmap-info-window>

      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :icon="{ url: require('../assets/pin.svg')}"
        :clickable="true"
        :price="m.price"
        @click="toggleInfoWindow(m,index)"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import MarkerWindow from '@/components/MarkerWindow'
const axios = require('axios');
export default {
  name: "FindParking",
  components: {
    MarkerWindow
  },
  data() {
    return {
      storedMarkers: [],
      mapStyle: {
        styles: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          styles: [
            {
              saturation: 10
            },
            {
              color: "#d7ddd7"
            },
            {
              lightness: 40
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#d7ddd7"
            },
            {
              lightness: 10
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#8fc18b"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#8fc18b"
            },
            {
              lightness: 17
            },
            {
              weight: 1
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f9f9f4"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#8fc18b"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#d7ddd7"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d7ddd7"
            },
            {
              lightness: 10
            },
            {
              weight: .1
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#d7ddd7"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#d7ddd7"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#ebe3cd"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#7ac0e2"
            },
            {
              lightness: 17
            }
          ]
        }
      ]
      },
      center: { lat: 49.2519, lng: -123.043 },
      places: [],
      currentPlace: null,
      infoPrice: null,
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -60
        }
      }
    };
  },

  mounted() {
    // Removing geolocation for the presentation.
    // this.geolocate();
  },

  computed: {
    markers: function() {
      return this.storedMarkers.map(e => {
        return {
          position: {
            lat: e.latitud,
            lng: e.longitud
          },
          // label: {
          //   color: 'white',
          //   fontWeight: 'bold',
          //   text: 'Hello world',
          // },
          price: Math.floor(Math.random() * (500 - 100) + 100) / 100
          // price: Math.floor(Math.random()*(3)+1)
          // price: Math.floor(Math.random()*(max-min+1)+min)
          // infoText: `Marker at position: ${e.latitud}, ${e.longitud}`,
          // label: 'A'
        }
      });
    }
  },

  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoPrice = marker.price;
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  created(){
    // console.log(this.center);
     axios
        .get('https://wmdd-get-w5-1542jkb8k.now.sh/api/get/parkingSpot')
        .then(response => {
          this.storedMarkers = response.data

        })
        .catch(error => {
          console.error(error)
        })
  }
};
</script>


<style>
.map{
    position: relative;

}
.searchParking{
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 20vh;
    z-index: 1;
    width: 30vw;
    background: white;
}
</style>
