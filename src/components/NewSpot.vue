<template>
  <b-container class="p-5 text-left" id="new-spot" fluid>
    <h2>New Parking Spot</h2>
    <b-form>
      <b-row class="my-5 border-section">
        <b-col cols="12">
          <b-form-group id="title-group"
                        label="Title"
                        label-for="title">
            <b-form-input id="title"
                          type="text"
                          required
                          placeholder="e.g.: Langara College">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group id="street-group"
                        label="Street address"
                        label-for="street">
            <b-form-input id="street"
                          type="text"
                          required
                          placeholder="e.g.: 100 West 49th Avenue">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group id="building-group"
                        label="Building name (optional)"
                        label-for="building">
            <b-form-input id="building"
                          type="text"
                          placeholder="e.g.: B Building">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="city-group"
                        label="City"
                        label-for="city">
            <b-form-input id="city"
                          type="text"
                          placeholder="e.g.: Vancouver">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="state-group"
                        label="State / Province"
                        label-for="state">
            <b-form-input id="state"
                          type="text"
                          placeholder="e.g.: BC">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6" lg="12">
          <b-form-group id="zip-group"
                        label="Zip code / Postal code"
                        label-for="zip">
            <b-form-input id="zip"
                          type="text"
                          placeholder="e.g.: V5Y 2Z6">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6" lg="12">
          <b-form-group id="country-group"
                        label="Country"
                        label-for="country">
            <b-form-input id="country"
                          type="text"
                          placeholder="Canada">
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-5 border-section">
        <b-container fluid class="mb-4">
          <h3>Parking Spot Type</h3>
          <small>Which type of spot are you listing?</small>
        </b-container>
        <!-- <b-button-group> -->
          <b-col v-for="(btn, idx) in spotTypeButtons" :key="btn.id" cols="auto" class="my-3">
            <b-button
              class="text-nowrap"
              :key="idx"
              :pressed.sync="btn.state"
              variant="outline-primary">
              {{ btn.caption }}
            </b-button>
          </b-col>
        <!-- </b-button-group> -->
      </b-row>
      <b-row class="my-5 border-section">
        <b-container fluid class="mb-4">
          <h3>Features of your parking spot</h3>
          <small>Inform the benefits that will make your parking spot stand out from the rest. You can choose more than one.</small>
        </b-container>
        <!-- <b-button-group> -->
          <b-col v-for="(btn, idx) in features" :key="btn.id" cols="auto" class="my-3">
            <b-button
              class="text-nowrap"
              :key="idx"
              :pressed.sync="btn.state"
              variant="outline-primary">
              {{ btn.caption }}
            </b-button>
          </b-col>
        <!-- </b-button-group> -->
      </b-row>
      <b-row class="my-5 border-section">
        <b-container fluid class="mb-4">
          <h3>Vehicle type</h3>
          <small>What car size your parking spot accommodate?</small>
        </b-container>
        <!-- <b-button-group> -->
          <b-col v-for="(btn, idx) in carTypeButtons" :key="btn.id" cols="auto" class="my-3">
            <b-button
              class="text-nowrap"
              :key="idx"
              :pressed.sync="btn.state"
              variant="outline-primary">
              {{ btn.caption }}
            </b-button>
          </b-col>
        <!-- </b-button-group> -->
      </b-row>
      <b-row class="my-5 border-section">
        <b-col cols="12" lg="6" class="mb-lg-0 mb-4">
          <h3>Description</h3>
          <b-form-textarea rows="5" type="text" placeholder="Give a brief description of your parking spot." :no-resize="true" v-model="description"/>
        </b-col>
        <b-col lg="6">
          <h3>Parking instructions</h3>
          <b-form-textarea rows="5" type="text" placeholder="List here any other information about your spot that the user needs to know when parking there." :no-resize="true" v-model="instructions"/>
        </b-col>
      </b-row>
      <!-- <b-row class="my-5 justify-content-lg-left justify-content-between"> -->
      <!-- <b-row class="my-5 justify-content-lg-left"> -->
      <b-row class="my-5" align-h="center">
        <b-container fluid class="mb-4">
          <h3>Add photos</h3>
          <small>Help users locate your spot.</small>
          <b-form-file multiple class="my-3 text-wrap" @change="previewImage" accept="image/*" />
        </b-container>
        <b-col class="image-preview my-4" cols="auto" v-for="(img, idx) in spotImageData" :key="img.id">
          <b-img v-bind="imageProps" rounded="circle" class="preview" :src="img" />
        </b-col>
      </b-row>
      <b-row class="my-5" align-h="center">
        <b-container fluid class="mb-4">
          <h3>Set availability</h3>
          <small>Choose days and time to rent your spot.</small>
        </b-container>
        <b-col class="my-3">
          <!-- TODO: refactor each row into a component -->
          <b-row class="mb-4 border-table">
            <b-col cols="12" lg="2" class="mb-4">
              <!-- TODO: "switch" prop is not working... -->
              <b-form-checkbox
                switch
                name="monday"
                v-model="availabilityWeek[0]">
                Monday
              </b-form-checkbox>
            </b-col>
            <b-col cols="auto">
              <label for="monday-start-time">Start</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="monday-start-time" type="time" :disabled="availabilityTimeCheck(0)" />
            </b-col>
            <b-col cols="auto">
              <label for="monday-end-time">End</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="monday-end-time" type="time" :disabled="availabilityTimeCheck(0)" />
            </b-col>
            <b-col cols="auto">
              <b-form-checkbox
                switch
                name="monday-24"
                v-model="availabilityWeek24[0]">
                24h
              </b-form-checkbox>
            </b-col>
          </b-row>
          <b-row class="mb-4 border-table">
            <b-col cols="12" lg="2" class="mb-4">
              <b-form-checkbox
                switch
                name="tuesday"
                v-model="availabilityWeek[1]">
                Tuesday
              </b-form-checkbox>
            </b-col>
            <b-col cols="auto">
              <label for="tuesday-start-time">Start</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="tuesday-start-time" type="time" :disabled="availabilityTimeCheck(1)" />
            </b-col>
            <b-col cols="auto">
              <label for="tuesday-end-time">End</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="tuesday-end-time" type="time" :disabled="availabilityTimeCheck(1)" />
            </b-col>
            <b-col cols="auto">
              <b-form-checkbox
                switch
                name="monday-24"
                v-model="availabilityWeek24[1]">
                24h
              </b-form-checkbox>
            </b-col>
          </b-row>
          <b-row class="mb-4 border-table">
            <b-col cols="12" lg="2" class="mb-4">
              <b-form-checkbox
                switch
                name="wednesday"
                v-model="availabilityWeek[2]">
                Wednesday
              </b-form-checkbox>
            </b-col>
            <b-col cols="auto">
              <label for="wednesday-start-time">Start</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="wednesday-start-time" type="time" :disabled="availabilityTimeCheck(2)" />
            </b-col>
            <b-col cols="auto">
              <label for="wednesday-end-time">End</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="wednesday-end-time" type="time" :disabled="availabilityTimeCheck(2)" />
            </b-col>
            <b-col cols="auto">
              <b-form-checkbox
                switch
                name="monday-24"
                v-model="availabilityWeek24[2]">
                24h
              </b-form-checkbox>
            </b-col>
          </b-row>
          <b-row class="mb-4 border-table">
            <b-col cols="12" lg="2" class="mb-4">
              <b-form-checkbox
                switch
                name="thursday"
                v-model="availabilityWeek[3]">
                Thursday
              </b-form-checkbox>
            </b-col>
            <b-col cols="auto">
              <label for="thursday-start-time">Start</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="thursday-start-time" type="time" :disabled="availabilityTimeCheck(3)" />
            </b-col>
            <b-col cols="auto">
              <label for="thursday-end-time">End</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="thursday-end-time" type="time" :disabled="availabilityTimeCheck(3)" />
            </b-col>
            <b-col cols="auto">
              <b-form-checkbox
                switch
                name="monday-24"
                v-model="availabilityWeek24[3]">
                24h
              </b-form-checkbox>
            </b-col>
          </b-row>
          <b-row class="mb-4 border-table">
            <b-col cols="12" lg="2" class="mb-4">
              <b-form-checkbox
                switch
                name="friday"
                v-model="availabilityWeek[4]">
                Friday
              </b-form-checkbox>
            </b-col>
            <b-col cols="auto">
              <label for="friday-start-time">Start</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="friday-start-time" type="time" :disabled="availabilityTimeCheck(4)" />
            </b-col>
            <b-col cols="auto">
              <label for="friday-end-time">End</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="friday-end-time" type="time" :disabled="availabilityTimeCheck(4)" />
            </b-col>
            <b-col cols="auto">
              <b-form-checkbox
                switch
                name="monday-24"
                v-model="availabilityWeek24[4]">
                24h
              </b-form-checkbox>
            </b-col>
          </b-row>
          <b-row class="mb-4 border-table">
            <b-col cols="12" lg="2" class="mb-4">
              <b-form-checkbox
                switch
                name="saturday"
                v-model="availabilityWeek[5]">
                Saturday
              </b-form-checkbox>
            </b-col>
            <b-col cols="auto">
              <label for="saturday-start-time">Start</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="saturday-start-time" type="time" :disabled="availabilityTimeCheck(5)" />
            </b-col>
            <b-col cols="auto">
              <label for="saturday-end-time">End</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="saturday-end-time" type="time" :disabled="availabilityTimeCheck(5)" />
            </b-col>
            <b-col cols="auto">
              <b-form-checkbox
                switch
                name="monday-24"
                v-model="availabilityWeek24[5]">
                24h
              </b-form-checkbox>
            </b-col>
          </b-row>
          <b-row class="mb-4">
            <b-col cols="12" lg="2" class="mb-4">
              <b-form-checkbox
                switch
                name="sunday"
                v-model="availabilityWeek[6]">
                Sunday
              </b-form-checkbox>
            </b-col>
            <b-col cols="auto">
              <label for="sunday-start-time">Start</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="sunday-start-time" type="time" :disabled="availabilityTimeCheck(6)" />
            </b-col>
            <b-col cols="auto">
              <label for="sunday-end-time">End</label>
            </b-col>
            <b-col cols="4" lg="3">
              <b-form-input id="sunday-end-time" type="time" :disabled="availabilityTimeCheck(6)" />
            </b-col>
            <b-col cols="auto">
              <b-form-checkbox
                switch
                name="monday-24"
                v-model="availabilityWeek24[6]">
                24h
              </b-form-checkbox>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="my-5 border-section">
        <b-container fluid class="mb-4">
          <h3>Set pricing</h3>
          <small>Inform the costs for the available categories.</small>
        </b-container>
          <b-col cols="auto" class="my-3">
            <b-form-group id="price-hour-group"
                          label="Hourly (CAD)"
                          label-for="price-hour">
              <b-form-input id="price-hour"
                            type="text"
                            :disabled="!prices[0]"
                            placeholder="e.g.: 1.5">
              </b-form-input>
              <b-form-checkbox
                switch
                class="mt-2"
                name="price-hour-check"
                v-model="prices[0]">
              </b-form-checkbox>
            </b-form-group>
          </b-col>
          <b-col cols="auto" class="my-3">
            <b-form-group id="price-day-group"
                          label="Daily (CAD)"
                          label-for="price-day">
              <b-form-input id="price-day"
                            type="text"
                            :disabled="!prices[1]"
                            placeholder="e.g.: 15">
              </b-form-input>
              <b-form-checkbox
                switch
                class="mt-2"
                name="price-day-check"
                v-model="prices[1]">
                </b-form-checkbox>
            </b-form-group>
          </b-col>
          <b-col cols="auto" class="my-3">
            <b-form-group id="price-month-group"
                          label="Monthly (CAD)"
                          label-for="price-month">
              <b-form-input id="price-month"
                            type="text"
                            :disabled="!prices[2]"
                            placeholder="e.g.: 80">
              </b-form-input>
              <b-form-checkbox
                switch
                class="mt-2"
                name="price-month-check"
                v-model="prices[2]">
                </b-form-checkbox>
            </b-form-group>
          </b-col>
      </b-row>
      <b-row align-h="end">
        <b-button type="submit" variant="primary" size="lg">Post</b-button>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    name: 'NewSpot',
    data () {
      return {
        description: "",
        instructions: "",
        availabilityWeek: [],
        availabilityWeek24: [],
        prices: [],
        spotTypeButtons: [
          { id:1, caption: 'Driveway', state: false },
          { id:2, caption: 'Laneway', state: false },
          { id:3, caption: 'Home garage', state: false },
          { id:4, caption: 'Condo', state: false },
          { id:5, caption: 'Parking Lot', state: false }
        ],
        features: [
          { id:1, caption: 'Covered', state: false },
          { id:2, caption: 'Lit', state: false },
          { id:3, caption: 'Camera', state: false },
          { id:4, caption: 'Gated', state: false },
          { id:5, caption: 'Security', state: false }
        ],
        carTypeButtons: [
          { id:1, caption: 'Small', state: false },
          { id:2, caption: 'Midsize', state: false },
          { id:3, caption: 'Large', state: false },
          { id:4, caption: 'Oversized', state: false }
        ],
        spotImageFiles: [],
        imageData: "",
        spotImageData:[],
        imageProps: { width: 250, height: 250 }
      }
    },
    methods: {
      availabilityTimeCheck: function (index) {
        return (!this.availabilityWeek[index] || this.availabilityWeek24[index]);
      },
      previewImage: function(event) {
        let input = event.target;
        if (input.files) {
          for (const file of input.files) {
            let reader = new FileReader();
            reader.onload = (e) => {
              this.imageData = e.target.result;
              this.spotImageData.push(e.target.result);
            }
            reader.readAsDataURL(file);
          }
        }
      }
    }
  }
</script>

<style scoped>
  #new-spot {
    color: #454F63;
    background-color: #EFF1F3;
  }

  .border-section, .border-table {
    border-bottom: 1px solid #C8C8C8;
  }

  .border-section {
    padding-bottom: 40px;
  }

  .border-table {
    padding-bottom: 25px;
  }
</style>
