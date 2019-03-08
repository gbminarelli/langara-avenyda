<template>
    <div id="accdetails">
            <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-form @submit="onSubmit">

                <b-form-group id="firstname" label="First Name:" label-for="fname">
                    <b-form-input
                    id="fname"
                    type="text"
                    v-model="form.fname"
                    required
                    placeholder="eg: John" />
                </b-form-group>

                <b-form-group id="lastname" label="Last Name:" label-for="lname">
                    <b-form-input
                    id="lname"
                    type="text"
                    v-model="form.lname"
                    required
                    placeholder="eg: Doe" />
                </b-form-group>

                <b-form-group id="phone" label="Phone:" label-for="ph">
                    <b-form-input
                    id="ph"
                    type="number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    v-model="form.ph"
                    required
                    placeholder="+1 2366686505" />
                </b-form-group>

                <b-form-group id="datec" label="Date:" label-for="date">
                    <b-form-input
                    id="date"
                    type="date"
                    v-model="form.date"
                    required
                    placeholder="" />
                </b-form-group>

                <b-form-group
                    id="emailid"
                    label="Email:"
                    label-for="email"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                    id="email"
                    type="email"
                    v-model="form.email"
                    required
                    placeholder="Enter email" />
                </b-form-group>

                <b-form-group id="password" label="Change Password:" label-for="pass">
                    <b-form-input
                    id="pass"
                    type="password"
                    v-model="form.pass"
                    required
                    placeholder="Password" />
                </b-form-group>

                <b-form-group id="password" label="Confirm Password:" label-for="confpass">
                    <b-form-input
                    id="confpass"
                    type="password"
                    v-model="form.pass"
                    required
                    placeholder="Password" />
                </b-form-group>

                <b-form-group id="staddress" label="Street Address:" label-for="sadd">
                    <b-form-input
                    id="sadd"
                    type="text"
                    v-model="form.sadd"
                    required
                    placeholder="eg: 13000 - 100th Avenue" />
                </b-form-group>

                <b-form-group id="buildname" label="Building Name(Optional):" label-for="bname">
                    <b-form-input
                    id="bname"
                    type="text"
                    v-model="form.bname"
                    placeholder="eg: Sky Tower" />
                </b-form-group>

                <b-form-group id="cityname" label="City:" label-for="city">
                    <b-form-input
                    id="city"
                    type="text"
                    v-model="form.city"
                    required
                    placeholder="eg: Vancouver" />
                </b-form-group>

                <b-form-group id="provincelist" label="Province:" label-for="province">
                    <b-form-select id="province" v-model="selected" label="Province" :options="options" />
                </b-form-group>

                <b-form-group id="zipcode" label="Zip Code/Postal Code:" label-for="zip">
                    <b-form-input
                    id="zip"
                    type="text"
                    v-model="form.zip"
                    required
                    placeholder="eg: V5W 2A7" />
                </b-form-group>

                <b-form-group id="country" label="Country:" label-for="city">
                    <b-form-input
                    id="count"
                    type="text"
                    v-model="form.count"
                    required
                    placeholder="eg: Canada" />
                </b-form-group>


                <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
                </b-card-body>
            </b-collapse>
    </div>
</template>

<script>
export default {
    name: 'AccountDetails',
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],

        form: {
            fname: '',
            lname: '',
            ph: '',
            date: '',
            email: '',
            pass: '',
            confpass: '',
            sadd: '',
            bname: '',
            city: '',
            province: '',
            zip: '',
            count: '',
          
        }
      }
    }
  }
</script>

<style scoped>
    #accordion1 {
        border-left: 1px solid lightgrey;
        border-right: 1px solid lightgrey;
        text-align: left;
        font-weight: bold;
    }
</style>
