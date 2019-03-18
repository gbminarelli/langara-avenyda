<template>
  <div class="formWidth">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-img v-bind="mainProps" rounded="circle" fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" class="congratsIMG" />
        <h1>Congratulations!</h1>
        <h2>Your parking is ready for you!</h2>
        <p>Reservation code</p>
        <p>10KV4DDS</p>
       

       <b-row><b-img v-bind="mainProps" rounded="circle" fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" class="user float-left" /></b-row>
        <h3>{{name}} is your host</h3>
        <p>Contact Host</p>
        <b-col ><p>{{address}}</p></b-col>
        <p>Get Directions</p>


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
      </b-row>



        
        <b-row>
          <b-col cols="8">
      <b-button block type="submit" variant="primary">Change your booking</b-button>
          </b-col>
        </b-row>
     
    </b-form>
  </div>
</template>

<script>
  export default {

name:"form3Parking",
    data() {
      return {
          name: 'Eduardo',
          address:'1234 100th King Edward  Vancouver,BC/',
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
.congratsIMG{
    width: 8vw;
}
.user{
    width: 5vw;
    height: 5vw;
}
</style>

