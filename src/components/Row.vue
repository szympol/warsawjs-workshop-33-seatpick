<template>
    <div class="row" :class="sideProp">
        <seat v-for="(seat, index) in rowProp" :key="`seat-${index}`" :seat-prop="seat" @seat-selected="selectSeat($event)"/>
    </div>
</template>

<script>
    import Seat from './Seat.vue';
    export default {
        name: 'row',
        props: {
            rowProp: {
                type: Array,
                default: () => []
            },
            sideProp: {
                type: String,
                default: ''
            }
        },
        components: {
            Seat
        },
        methods: {
                selectSeat ($event) {
                    this.$emit('seat-selected', $event)
                }
        }
    }
</script>

<style lang="css" scoped>
  .row.left {
    transform: skew(-15deg);
    margin: 0 6px;
  }
  .row.right {
    transform: skew(-15deg);
    margin: 0 6px;
  }
</style>