<template lang="html">
    <div>
        <div class="cinema">
        <preview v-if="selectedSeats.length" :selected-seats-prop="selectedSeats" @start-reservation="startReservation($event)"/>
        <div class="screen"></div>
          <div class="rows">
            <row v-for="(row, index) in cinema.left" :key="`row-left-${index}`" :row-prop="row" side-prop="left" @seat-selected="collectSeats($event)"/>
          </div>
          <div class="rows">
            <row v-for="(row, index) in cinema.right" :key="`row-right-${index}`" :row-prop="row" side-prop="right" @seat-selected="collectSeats($event)"/>
          </div>
        </div>
        <modal v-if="modalIsVisible" @show-modal="showModal($event)"/>
    </div>
</template>

<script>
  import Row from './Row.vue';
  import Preview from './Preview.vue';
  import Modal from './Modal/Modal.vue';

  export default {
      name: 'cinema',
      data () {
          return {
              cinema: {
                left: [
                    ['A1','A2','A3','A4','A5','A6'],
                    ['B1','B2','B3','B4','B5','B6'],
                    ['C1','C2','C3','C4','C5','C6'],
                    ['D1','D2','D3','D4','D5','D6'],
                    ['E1','E2','E3','E4','E5','E6']
                ],
                right: [
                    ['F1','F2','F3','F4','F5','F6'],
                    ['G1','G2','G3','G4','G5','G6'],
                    ['H1','H2','H3','H4','H5','H6'],
                    ['I1','I2','I3','I4','I5','I6'],
                    ['J1','J2','J3','J4','J5','J6']
                ]
            },
            selectedSeats: [],
            modalIsVisible: false
          }
      },
    components: {
      Row,
      Preview,
      Modal
    },
    methods: {
      collectSeats ($event) {
        const { id, type } = $event;
        if (type === 'add') {
          this.selectedSeats = [...this.selectedSeats, id]
        } else {
            this.selectedSeats = this.selectedSeats.filter(_id => _id !== id)
        }
      },
      startReservation() {
        this.modalIsVisible = true;
      },
      showModal ($event) {
        this.modalIsVisible = $event;
        this.$store.dispatch('collectReservedSeats', this.selectedSeats)
        this.selectedSeats = []
      }
    }
  }
</script>

<style lang="css" scoped>
 .cinema {
    top: 70%;
    left: 50%;
    display: flex;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .screen {
    left: 0;
    right: 0;
    top: -250px;
    height: 230px;
    border-radius: 5px;
    position: absolute;
    background-color: white;
    width: calc(100% + 40px);
    background-size: 100% 100%;
    background-image: url('https://cl.ly/457717c53781/tenor.gif');
  }
  .rows {
    display: flex;
    margin: 0 20px;
    margin-top: 50px;

  }

 
</style>
