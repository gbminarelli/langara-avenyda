<template>
  <div class="formWidth">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <h1>Find a parking spot in Canada on Avenyda</h1>
        <b-card no-body class="full-width"> 
      
    <b-tabs pills class="superpill">
      <b-tab title="Hourly" active :title-link-class="linkClass(1)" class="tabPildora"></b-tab>
      <b-tab title="Daily" :title-link-class="linkClass(2)" class="tabPildora"></b-tab>
      <b-tab title="Monthly" :title-link-class="linkClass(3)" class="tabPildora"></b-tab>
    </b-tabs>
      
  </b-card>
      <div class="mt-2">Where</div>
      <b-form-group
        id="exampleInputGroup1"
        label-for="exampleInput1"
        description="We'll never share your address with anyone else."
      >
        <b-form-input
          id="exampleInput1"
          type="text"
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
        <b-col cols="6">
        <b-dropdown  slot="append" text="CAMERA" variant="outline-secondary" class="dropbtn1">
            <b-dropdown-item>Camera</b-dropdown-item>
            <b-dropdown-item>Audio</b-dropdown-item>
        </b-dropdown>
        </b-col>
    
        
        <!-- <div class="mt-2">Vehicle Size</div> -->
        <b-col cols="6">
         <b-dropdown  block slot="append" text="MIDSIZE" variant="outline-secondary" class="dropbtn2">
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
        text1:'',
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
      },
      linkClass(idx) {
        if(this.tabIndex === 0){
          if(idx==1){
            return ['bg-info', 'text-white']
          }
        }
        else if (this.tabIndex === idx) {
        return ['bg-info', 'text-white']
      } else {
        return ['bg-light', 'text-dark']
      }
    }
    }
  }
</script>

<style scoped>
.formWidth{
 width: 80vw;
 padding: 1rem!important;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
  background-color: red !important;
}
.mt-2{
  text-align: left;
}
.btn{
  margin-top: 1rem;
  padding: 1rem 0 0 1rem;
}
h1{
  font-size: 1.7rem;
  font-weight: bold;
}
.dropbtn1{
  width: 210px;
}
.dropbtn2{
  width: 150px;
}

 @media (min-width: 1000px) {
   .formWidth{
 width: 30vw;}
}
</style>

