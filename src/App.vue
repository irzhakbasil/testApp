<template>
    <div id='app'>
        <div class="nav-container">
            <h3 class="vue-title">Post Trucks</h3>
            <button id="new-btn" @click = "addTruck">NEW</button>
            <button id="delete-btn" @click = "eraseTable">DELETE ALL</button>
        </div>

        <div id="app">
        <div class="container table">
        <v-client-table :columns="columns" :data="data" :options="options">
            
        </v-client-table>
        </div>
        </div>
    <modals-container/>
    </div>
    
</template>

<script>
    import Modal from './Modal'

    let tableData = [];
    let getData = () => tableData;

    export default {
      
      data: function () {
         return {
            columns:['callControl', 'read', 'soundAutoCall', 'truck', 'origin', 'destination', 'pickup', 'dho', 'dhd', 'fp', 'length', 'weight', 'trip', 'alarm', 'actions'],
            data: getData(),
            options: {
            headings: {
                callControl: 'Call Control',
                read: 'Read',
                soundAutoCall: 'Sound / Auto Call',
                truck: 'Truck',
                origin: 'Origin',
                destination: 'Destination',
                pickup: 'Pickup',
                dho: 'DH-O',
                dhd: 'DH-D',
                fp: 'FP',
                length: 'Length',
                weight: 'Weight',
                trip: 'Trip',
                alarm: 'Alarm',
                actions: 'Actions'
            },
            sortable: ['truck'],
            filterable: false
            }
        }
      },
      components: {
          Modal
      },
      methods: {
          addTruck() {
            this.$modal.show(Modal, {
                saveTruck(newTruck) {
                    tableData.push(newTruck);
                    console.log(tableData)
                }
            }, {
                height: '500px',
                width: '205px'
            });
          },
          eraseTable() {
              tableData = [];
              this.data = getData();
          }
      }
}
</script>

<style>
#app {
  background: rgb(161, 196, 252);
  width: 95%;
  height: 95%;
  margin: 0 auto;
  padding-top: 10px;
}
#new-btn {
    background: rgb(136, 232, 143);
    font-weight: bold;
}
#delete-btn {
    background: rgb(255, 155, 155);
    font-weight: bold;
}
th {
    background: rgb(61, 60, 44);
    text-align: center;
    color:white;
}
.table {
    margin-top: 3px;
}
.nav-container {
    margin-left: 50px;
}
</style>
