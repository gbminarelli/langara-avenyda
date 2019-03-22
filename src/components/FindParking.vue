<template>
  <div class="map">
    <div class="searchParking">
      <form1Parking v-if="formFlag === 0" />
      <form2Parking v-if="formFlag === 1" @confirm-spot="updateForm(2)"/>
      <form3Parking v-if="formFlag === 2" />
      <!-- <h2>Find a parking spot in Canada on Avenyda {{storedMarkers.data[0].latitud}} {{storedMarkers.data[0].longitud}}</h2>
      <h2 v-for="marker in storedMarkers" :key="marker.id">
        Marker with ID = {{marker.id}}: {{marker.latitud}}, {{marker.longitud}}
      </h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="">Add</button>
      </label>
      <br/> -->
    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="18"
      v-bind:options="mapStyle"
      style="width:100%;  height: 70vh; margin-top:-5vh;">

      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <MarkerWindow :price="infoPrice" @book-spot="updateForm(1)" />
      </gmap-info-window>

      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :icon="{ url: require('../assets/pin.svg')}"
        :clickable="true"
        :price="m.price"
        :label="m.label"
        @click="toggleInfoWindow(m,index)"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import MarkerWindow from '@/components/MarkerWindow'
import form1Parking from '@/components/form1Parking'
import form2Parking from '@/components/form2Parking'
import form3Parking from '@/components/form3Parking'
const axios = require('axios');
export default {
  name: "FindParking",
  components: {
    MarkerWindow,
    form1Parking,
    form2Parking,
    form3Parking
  },
  data() {
    return {
      storedMarkers: [],
      currentMarker: null,
      formFlag: 0,
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
        let price = Math.floor(Math.random() * (500 - 100) + 100) / 100;
        return {
          position: {
            lat: e.latitud,
            lng: e.longitud
          },
          label: {
            text: `${price}`,
            fontSize: "1rem"
          },
          price: price
        }
      });
    }
  },

  methods: {
    updateForm: function(value = 0) {
      this.formFlag = value;
      this.infoWinOpen = false;
      // this.currentMarker.label = "P"
    },
    toggleInfoWindow: function(marker, idx) {
      this.formFlag = 0;
      this.currentMarker = marker;
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
      left: 10px;
      z-index: 1;
      height: 60vh;
      width: 33vw;
      overflow-y: scroll;
      background: white;
      padding: auto;
  }
</style>
