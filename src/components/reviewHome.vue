<template>
<div class="review">
    <img src="../assets/quotation.png" alt="" class="quot">
    <h1>What people are talking about Avenyda?</h1>
    <div class="card1">
        <img src="../assets/jorge-saavedra-716885-unsplash.jpg" alt="">
        <h2>John Mike</h2>
        <h3>Marketing Management @Pepsi</h3>
        <p>"Finding a parking spot is easier now thanks to parking spot"</p>
    </div>
    <div class="card1">
        <img src="../assets/jorge-saavedra-716885-unsplash.jpg" alt="">
        <h2>John Mike</h2>
        <h3>Marketing Management @Pepsi</h3>
        <p>"Finding a parking spot is easier now thanks to parking spot"</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'review',
    data(){
        return{

        }
    }
}
</script>

<style>
.review{
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    padding: 10px;
    position: relative;
    padding-top: 50px;
}
.review h1{
width: 30vw;
}
.card1{
    margin: 30px;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 2px 10px lightgrey;
}
.card1 img{
    width: 5vw;
    height: 5vw;
    border-radius: 3rem;
    object-fit: cover;
    float: left;
    margin: 10px;
}
.card1 h2{
    text-align: left;
    font-size: 1.5rem;
    font-family: bold;
    margin-bottom: 0;
}
.card1 h3{
    text-align: left;
    font-size: 1.2rem;
}
.card1 p{
    font-size: .8rem;
}
.quot{
    position: absolute;
    width: 10vw;
    right: 0;
    filter: opacity(40%);
    z-index: -1;
    
}
@media (max-width: 630px) {

.review{
    display: grid;
    grid-template-columns: 1fr;
}
.review h1{
    width: 90%;
    margin: 0 auto;
    text-align: center;
}
.card1{
    height: 30vh;
}
.card1 img{
    width: 20vw;
    height: 20vw;
    border-radius: 3rem;

}
.card1 p{
    margin-top: 3rem;
    font-size: 1.3rem;
}
.quot{
    width: 40vw;
}
}
</style>
