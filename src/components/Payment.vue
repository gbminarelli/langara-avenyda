<template>
    <div id="payment">
        <b-collapse id="accordion2" visible accordion="my-accordion2" role="tabpanel">
            <b-card class="one">
                <div id="sq">

                </div>
            </b-card>
        </b-collapse>
    </div>
</template>

<script>
export default {
    name: 'Payment',
    data() {
        return {}
    },
}
</script>

<style scoped>
    #payment {
        border-left: 1px solid lightgrey;
        border-right: 1px solid lightgrey;
    }

    .one {
        margin: 20px;
        height: 65px;
        width: 122px;
        background-color: lightslategrey;
        text-align: left;
    } 

    #sq {
        height: 29px;
        width: 29px;
        border-radius: 50%;
        background-color: white;
        justify-content: center;
        align-content: center
    }
</style>
