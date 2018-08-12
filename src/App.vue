<template>
    <div id='app'>
        <div class="nav-container">
            <h3 class="vue-title">Post Trucks</h3>
            <button id="new-btn" @click = "addTruck">NEW</button>
            <button id="play-btn" @click = "randomInput">PLAY</button>
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
    import dataObj from './dataObj'
    import tableHeadings from './tableHeadings'
    import words from './words'

    let tableData = [];
    let getData = () => tableData;

    export default {

      data: function () {
         return {
            columns: Object.keys(dataObj),
            data: getData(),
            options: {
            headings: tableHeadings,
            sortable: [''],
            filterable: false,
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
                }
            },{
                height: '500px',
                width: '205px'
            });
          },
          eraseTable() {
              tableData = [];
              this.data = getData();
          },
          randomInput(){
              let tmpObj = Object.assign({}, dataObj);
              for(let i in tmpObj) {
                  let word = words[Math.floor(Math.random() * words.length)]
                  tmpObj[i] = word;
              }
               tableData.push(tmpObj);
          }
      }
}
</script>

<style>
body {
  background: rgb(161, 196, 252);   
}
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
#play-btn {
    background: rgb(92, 172, 238);
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
