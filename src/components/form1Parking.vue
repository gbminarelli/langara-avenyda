<template>
  <div class="formWidth">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <h1>Find a parking spot in Canada on Avenyda</h1>
        <b-card no-body > 
      
    <b-tabs pills class="superpill">
      <b-tab title="Hourly" active ></b-tab>
      <b-tab title="Daily"></b-tab>
      <b-tab title="Monthly"></b-tab>
    </b-tabs>
      
  </b-card>
      <b-form-group
        id="exampleInputGroup1"
        label="Where"
        label-for="exampleInput1"
        description="We'll never share your address with anyone else."
      >
        <b-form-input
          id="exampleInput1"
          type="email"
          v-model="form.email"
          required
          placeholder="eg: city, street name, postal code" />
      </b-form-group>

      <div class="mt-2">Start Parking</div>
      <b-row>
        <b-col>
      <b-form-input v-model="text1" type="date" placeholder="12-03-19"/>
        </b-col>
        <b-col cols="4">
      <b-form-input v-model="text1" type="time" placeholder="Time"/>
        </b-col>
      </b-row>

      <div class="mt-2">End Parking</div>
      <b-row>
        <b-col>
      <b-form-input v-model="text1" type="date" placeholder="12-03-19" />
        </b-col>
        <b-col cols="4">
      <b-form-input v-model="text1" type="time" placeholder="Time" />
        </b-col>
      </b-row>




        <b-row>
            <b-col><div class="mt-2">Parking Features</div></b-col>
            <b-col><div class="mt-2">Vehicle Size</div></b-col>
        </b-row>

        <b-row>
        <!-- <div class="mt-2">Parking Features</div> -->
        <b-col cols="7">
        <b-dropdown  block slot="append" text="CAMERA" variant="outline-secondary">
            <b-dropdown-item>Camera</b-dropdown-item>
            <b-dropdown-item>Audio</b-dropdown-item>
        </b-dropdown>
        </b-col>
    
        
        <!-- <div class="mt-2">Vehicle Size</div> -->
        <b-col cols="5">
         <b-dropdown  block slot="append" text="MIDSIZE" variant="outline-secondary">
            <b-dropdown-item>SMALL</b-dropdown-item>
            <b-dropdown-item>MIDSIZE</b-dropdown-item>
        </b-dropdown>
        </b-col>
        </b-row>

      <b-button block type="submit" variant="primary">Search</b-button>
     
    </b-form>
  </div>
</template>

<script>
  export default {

name:"form1Parking",
    data() {
      return {
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

}

</style>

