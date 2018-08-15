<template>
    <div id='app'>
        <div class="nav-container">

            <h3 id="heading" class="vue-title">Post Trucks</h3>

            <a href="" @click.prevent = "randomInput" id="play-btn">
                <img src="./img/play.png" height="45" width="45"/>
            </a>

            <a href="" @click.prevent = "addTruck" id="new-btn">
                <img id="img" src="./img/add.png" height="32" width="32"/>
            New
            </a>

             <a href="" @click.prevent = "eraseTable" id="delete-btn">
                <img src="./img/delete.png" height="32" width="32"/>
            Delete All
            </a>

        </div>

        <div id="app">
            <div class="container table">
                <v-client-table :columns="columns" :data="data" :options="options"></v-client-table>
            </div>
        </div>
    <modals-container/>
    </div>
    
</template>

<script>
    import Modal from './Modal'
    import dataObj from './data/dataObj'
    import tableHeadings from './data/tableHeadings'
    import words from './data/words'

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
                height: 'auto',
                width: '211px',
            });
          },
          eraseTable() {
              tableData = [];
              this.data = getData();
          },
          randomInput(){
              let tmpObj = Object.assign({}, dataObj);
              for(let i in tmpObj) {
                  tmpObj[i] = words[Math.floor(Math.random() * words.length)]
              }
               tableData.push(tmpObj);
          }
      }
}
</script>

<style>
body {
  background: #c6dbec;   
}
#heading {
    margin-bottom: 25px;
    font-size: 30px;
}
#app {
  background:#c6dbec;
  width: 95%;
  height: 95%;
  margin: 0 auto;
  padding-top: 10px;
}
#new-btn {
    text-decoration: none;
    margin-right: 15px;
    color: #243447;
    font-size: 23px;
}
#play-btn {
    text-decoration: none;
    margin-right: 15px;
}
#delete-btn {
    text-decoration: none;
    color: #243447;
    font-size: 23px;
}
th {
    background: #454345;
    text-align: center;
    color:white;
}
.table {
    margin-top: 3px;
}
.nav-container {
    margin-left: 50px;
}
td {
    font-size: 14px;
    text-align: center;
    font-family: 'Mitr', sans-serif;
}
</style>

