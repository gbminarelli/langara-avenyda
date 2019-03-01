<template>
<b-container fluid>
<div class="top">
<div class="top-text">
  <h1>Frequently asked <br>questions</h1>
</div>
</div>


<div class="bottom">
<div role="tablist" class="questionsTable">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info">What is Avenyda?</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{I start opened because <code>visible</code> is <code>true</code>}}
          </p>
          <p class="card-text">
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info">What is Avenyda?</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{text}}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="info">What is Avenyda?</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>

  <div class="smallBox">
    <h2>Still need help?</h2>
    <p class="pColor">Send us an email and we'll<br> be happy to answer you!</p>
    <button class="faqbutton">GET IN TOUCH</button>
  </div>
  </div>
  </b-container>
</template>

<script>



export default {
  name: 'Faqs',
  data () {
    return {
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.smallBox{
width: max-content;
height: max-content;
padding: 10px;
margin-right: 100px;
}
.faqbutton{
  background: #03E3FC;
  color: white;
  border: none;
  float: left;
}
.pColor{
  color: #454F63;
  text-align: left;
}
h2{
  color: #454F63;
}
.bottom{

  margin-top: 50px;
  margin-bottom: 50px;
}
.top{
background-image: url("../assets/tyler-rutherford-1130939-unsplash.jpg");
background-size: 100vw;
background-repeat: no-repeat;
width: 100%;
padding-left: 137px;
background-position: center;
position: relative;
}
.top-text{
  height: 50vh;
  padding-bottom: 7vh;
}
h1{
  color: white;
  font-weight: bold;
  font-size: 50px;
  text-align: left;
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
}
p{
  color: white;
  padding: 0;
  margin-left: 0;
  text-align: left;
}
.find-parking{
background: #3ACCE1;
color: white;
border: 2px solid white;
display: block;
margin-bottom: 10px;
margin-top: 30px;
font-size: 14px;
}
.list-parking{
background: transparent;
color: white;
border: 2px solid #3ACCE1;
display: block;
font-size: 14px;
}
.container-fluid{
  padding: 0;
}
.card-text{
  color: #454F63;
}

.questionsTable h1{
  color: #454F63;
  margin-bottom: 5vh;
}
.btn-info{
  background: transparent;
  color: #454F63;
  border: none;
  text-align: start;
  font-weight: bold;
}
.card-header{
  border-bottom: 3px solid black;
  background: transparent;
}
.mb-1{
  border: none;
}


@media (max-width: 768px){
.smallBox{
  margin: 0 auto;
}
h1{
  padding-bottom: 3rem;
  font-size: 2.5rem !important;
}
.bottom{
  margin-top: 1rem !important;
}
.questionsTable{
  width: 90%;
  margin: 0 auto;
}
}
@media (min-width: 768px){
.bottom{
  display:grid;
  grid-template-columns: auto auto;
}
.questionsTable{
  margin-left: 139px;
  margin-right: 30px;

}
}
</style>
