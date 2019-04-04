<template>
  <b-container fluid class="py-4 text-left">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h1>Find a parking spot in Canada on Avenyda</h1>
      <b-form-group class="my-4">
        <b-form-radio-group
        id="btn-radios"
        v-model="selectedTime"
        :options="optionsTime"
        buttons
        button-variant="outline-primary"
        name="radio-btn-outline">
        </b-form-radio-group>
      </b-form-group>
      <p class="mt-3 mb-1">Where</p>
      <b-form-input
      type="text"
      required
      placeholder="eg: city, street name, postal code" />
      <p class="mt-3 mb-1">Start Parking</p>
      <b-row>
        <b-col cols="8">
          <b-form-input type="date" placeholder="12-03-19"/>
        </b-col>
        <b-col cols="4">
          <b-form-input type="time" placeholder="Time"/>
        </b-col>
      </b-row>
      <p class="mt-3 mb-1">End Parking</p>
      <b-row>
        <b-col cols="8">
          <b-form-input type="date" placeholder="12-03-19" />
        </b-col>
        <b-col cols="4">
          <b-form-input type="time" placeholder="Time" />
        </b-col>
      </b-row>
      <b-row class="mt-3 mb-1">
        <b-col cols="8">
          <p class="mb-1">Parking features</p>
          <b-form-select v-model="selectedFeatures" :options="optionsFeatures"></b-form-select>
        </b-col>
        <b-col cols="4">
          <p class="mb-1">Vehicle size</p>
          <b-form-select v-model="selectedSize" :options="optionsSize"></b-form-select>
        </b-col>
      </b-row>
      <b-button class="mt-4" block type="submit" size="lg" variant="primary">Search</b-button>
    </b-form>
  </b-container>
</template>

<script>
  export default {

name:"form1Parking",
    data() {
      return {
        selectedTime: '1',
        optionsTime: [
          { text: 'Hourly', value: '1'},
          { text: 'Daily', value: '2' },
          { text: 'Monthly', value: '3' }
        ],
        selectedFeatures: '1',
        optionsFeatures: [
          { text: 'Covered', value: '1'},
          { text: 'Lit', value: '2' },
          { text: 'Camera', value: '3' },
          { text: 'Gated', value: '4' },
          { text: 'Security', value: '5' }
        ],
        selectedSize: '1',
        optionsSize: [
          { text: 'Small', value: '1'},
          { text: 'Midsize', value: '2' },
          { text: 'Large', value: '3' },
          { text: 'Oversized', value: '4' }
        ],
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
  h1 {
    font-size: 2.4rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 0;
  }

  #btn-radios {
    width: 100%;
  }
</style>
