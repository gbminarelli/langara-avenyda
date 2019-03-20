<template>
  <div class="formWidth">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <h1>{{name}}'s Spot</h1>
       
      <b-row>
        <b-col cols="2"><b-badge variant="light">Driveway</b-badge></b-col>
        <b-col cols="10"><p>{{address}}</p></b-col>
      </b-row>
      <b-row>
        <p>{{description}}</p>
      </b-row>
      <b-row>
        <p>⭐⭐⭐★★</p>
      </b-row>


      <b-container fluid >
  <b-row>
    <b-col>
      <b-img  fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
    </b-col>
    <b-col>
      <b-img  fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2" />
    </b-col>
    <b-col>
      <b-img  fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3" />
    </b-col>
  </b-row>
    </b-container>

    <b-row>
      <p class="contactHost">Contact Host</p>
    </b-row>

<div class="backgroundCard">
      <b-container fluid>
        <h2>Parking features</h2>
        <b-row><b-col><p>Light</p></b-col><b-col><p>Camera</p></b-col></b-row>

        <h2>Parking Instructions</h2>
        <p>{{parkingDescription}}</p>
      </b-container>
</div>
      <b-row>
      <b-col >
      <div class="mt-2">Start Parking</div>
      <b-row>
        <b-col>
      <b-form-input v-model="text1" type="date" placeholder="12-03-19"/>
        </b-col>
        <b-col cols="5">
      <b-form-input v-model="text1" type="time" placeholder="Time"/>
        </b-col>
      </b-row>

      <div class="mt-2">End Parking</div>
      <b-row>
        <b-col>
      <b-form-input v-model="text1" type="date" placeholder="12-03-19" />
        </b-col>
        <b-col cols="5">
      <b-form-input v-model="text1" type="time" placeholder="Time" />
        </b-col>
      </b-row>
      </b-col>
      <b-col cols="4">
        <b-card-body class="shadowCard">
          <b-card-sub-title class="mb-2">You will pay:</b-card-sub-title>
        <b-card-title>4.50CAD</b-card-title>
        </b-card-body>
      </b-col>
      </b-row>



        
        <b-row class="btnMargin">
          <b-col cols="4">
      <b-button block type="submit" variant="danger">Cancel</b-button>
          </b-col>
          <b-col cols="8">
      <b-button block type="submit" variant="primary">Confirm Booking</b-button>
          </b-col>
        </b-row>
     
    </b-form>
  </div>
</template>

<script>
  export default {

name:"form2Parking",
    data() {
      return {
          name: 'Eduardo',
          address:'1234 100th King Edward  Vancouver,BC',
          description:'This is a cozy room, with its own bathroom. Though the entrance to the house is shared, the position of the guest suite allows for privacy.',
          parkingDescription:'This is a cozy room, with its own bathroom. Though the entrance to the house is shared, the position of the guest suite allows for privacy.',
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
.formWidth{
 width: 30vw;
padding-left: 2rem;
}
.contactHost{
  margin: 1rem;
  color: #00E5FF;
  font-weight: bold;
}
.backgroundCard{
  background: #EFF1F3;
  text-align: left;
  font-size: .8rem;
}
.shadowCard{
  box-shadow: 2px 2px grey;
  border-radius: 1rem;
  color: #00E5FF;
  font-weight: bold;
}
.btnMargin{
  margin-top: 1rem;
}
h2{
  font-size: 1.3rem;
  font-weight: bold;
}
</style>

