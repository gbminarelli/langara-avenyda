<template>
    <div id="home">
        <!--<b-container class="h-100 p-5 bg-container" id="one" fluid>-->
            <!--<b-row class="hg">-->

                <!--<b-col class="h-100 ">-->
                    <!--<div>-->
                        <!--<h2 class="pb-5 my-5">Parking’s new best friend</h2>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<p>Find convenient and affordable parking listed by locals</p>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<b-button href="#" variant="primary" class="mr-4">FIND PARKING</b-button>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<b-button href="#" variant="outline-success"> LIST YOUR PARKING</b-button>-->
                    <!--</div>-->
                <!--</b-col>-->
                <!--<b-col class="h-100"></b-col>-->
                <!--<b-col class="h-100"></b-col>-->
            <!--</b-row>-->

        <!--</b-container>-->

        <!--Second Element-->
        <!--<b-container class="p-5" fluid>-->
            <!--<b-row>-->
                <!--<b-col cols="4" class="text-left">-->
                    <!--<h2 class="my-5 pt-5">Parking with Avenyda</h2>-->
                    <!--<p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien</p>-->
                <!--</b-col>-->
                <!--<b-col>-->
                    <!--&lt;!&ndash; <b-img right src="../assets/maps-placeholder.png" fluid alt="maps placeholder" class="pl-5"/> &ndash;&gt;-->
                    <!--<GoogleMap />-->
                <!--</b-col>-->

            <!--</b-row>-->
        <!--</b-container>-->

        <!--Tghird element-->
        <b-container class="p-5 bg-container" fluid>
            <b-row>
                <b-col cols="4" class="text-left">
                    <h2 class="my-5 pt-5">Why Avenyda?</h2>
                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien</p>
                </b-col>
                <b-col>
                    <b-img right src="../assets/more-info-placeholder.png" fluid alt="more info placeholder" class="pl-5"/>
                </b-col>
            </b-row>
        </b-container>

        <!--Fourth Element-->
        <b-container class="p-5" fluid>
            <h2 class="my-5 pb-4">List your parking</h2>
            <b-row>
                <b-col>
                    <b-img rounded="circle" blank width="250" height="250" blank-color="#ddd" alt="img" class="m-1" />
                    <div class="mb-5 px-5">
                        <h3 class="pt-4 pb-2">Lorem Impsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </b-col>
                <b-col>
                    <b-img rounded="circle" blank width="250" height="250" blank-color="#ddd" alt="img" class="m-1" />
                    <div class="mb-5 px-5">
                        <h3 class="pt-4 pb-2">Lorem Impsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </b-col>
                <b-col>
                    <b-img rounded="circle" blank width="250" height="250" blank-color="#ddd" alt="img" class="m-1" />
                    <div class="mb-5 px-5">
                        <h3 class="pt-4 pb-2">Lorem Impsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <b-container class="p-5 bg-container" fluid>
            <b-row>
                <b-col cols="4" class="text-left">
                    <h2 class="my-5 pt-5">What our custumers have to say</h2>
                </b-col>
                <b-col>
                    <Carousel />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import CreateAccount from '@/components/CreateAccount'
    import Carousel from '@/components/Carousel'
    import GoogleMap from "@/components/GoogleMap"

    export default {
        name: 'Home',
        data () {
            return {
                companyName:'Avenyda'
            }
        },
        components: {
            CreateAccount,
            Carousel,
            GoogleMap
        }
    }
</script>

<style scoped>


    h2 {
        font-size: 3rem;
    }

    h3 {
        font-size: 2rem;
    }

    .bg-container {
        background-color: darkgrey;
    }

    #one {
        background-image: url("../assets/bkpic.jpg");
        background-size: cover;
    }
    .mb-5{
        height: 60vh;
    }

    .head-links div {
        position: absolute;
        bottom: 0px;
    }

    .hg {
        height: 87%;
    }
</style>
