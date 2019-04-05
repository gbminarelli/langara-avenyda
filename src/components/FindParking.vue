<template>
  <div class="map">
    <div class="searchParking">
      <form1Parking v-if="formFlag === 0" />
      <form2Parking v-else-if="formFlag === 1" @confirm-spot="updateForm(2)" @datetime="updateDatetime"/>
      <form3Parking v-else-if="formFlag === 2" :datetime="datetime" />
    </div>
    <gmap-map
      :center="center"
      :zoom="18"
      v-bind:options="mapStyle"
      style="width:100%;  height: 100vh;">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <MarkerWindow :price="infoPrice" @book-spot="updateForm(1)" />
      </gmap-info-window>
      <gmap-marker
        :animation="0"
        :key="index"
        ref="markers"
        v-for="(m, index) in markers"
        :position="m.position"
        :icon="{
          labelOrigin: {x: 37, y: 28},
          url: require('../assets/pin.svg')
        }"
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
      datetime: null,
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
    // window.setTimeout(window.alert, 2000);

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
            fontSize: "0.9rem",
            // color: "rgba(0, 0, 0, 0)"
            color: "#333"
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
    updateDatetime: function(value) {
      this.datetime = value;      
    },
    toggleInfoWindow: function(marker, idx) {
      // this.$refs.markers[idx].$markerObject.setAnimation(google.maps.Animation.BOUNCE);
      this.$refs.markers[idx].$markerObject.setAnimation(google.maps.Animation.DROP);
      this.hideLabel(idx);
      this.formFlag = 0;
      this.currentMarker = marker;
      this.infoWindowPos = marker.position;
      this.infoPrice = marker.price;
      this.infoWinOpen = true;
      this.currentMidx = idx;
    },
    hideLabel(idx) {
      this.storedMarkers.forEach((e, i) => {
        if (i === idx) {
          // this.$refs.markers[i].$markerObject.setAnimation(google.maps.Animation.BOUNCE);
          this.$refs.markers[i].$markerObject.label.color = "rgba(0, 0, 0, 0)";
        // } else if (this.$refs.markers[i].$markerObject.animation === 1) {
        } else {
          // this.$refs.markers[i].$markerObject.setAnimation(google.maps.Animation.DROP);
          // console.log(this.$refs.markers[i].$markerObject);
          // this.$refs.markers[i].$markerObject.setAnimation();
          this.$refs.markers[i].$markerObject.label.color = "#333";
        }
      })
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
          this.storedMarkers = response.data;
          response.data.forEach((e, i) => {
            window.setTimeout(function() {
              // this.storedMarkers.push(e);
              // this.storedMarkers[i] = e;
              // console.log(typeof this.storedMarkers);
            }, i*200);
          });
        })
        .catch(error => {
          console.error(error)
        })
  }

};
</script>


<style scoped>
  .map {
    position: relative;
  }

  .searchParking {
    position: absolute;
    /* left: 10px;
    top:10px; */
    z-index: 1;
    max-height: 100vh;
    width: 520px;
    /* width: 35vw; */
    /* overflow-y: scroll; */
    background: white;
    padding-left: 12px;
    /* padding: auto; */
  }

  .label {
    color: red;
  }

  @media (max-width: 750px) {
    .vue-map-container{
      height: 60vh !important;
    }
    .searchParking{
      position: relative;
      max-height: 100%;
    }
  }


  /* vue-map-container */
</style>
