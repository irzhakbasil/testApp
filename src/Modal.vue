<template>
    <div class="container">
        <h3>- New Truck Info - </h3>
            <div id="input-div" v-for="(value, key, index) in fields" :key='fields[index]'>
                <input v-model = 'fields[key]' :placeholder = key>
            </div>
            <div>
                <button id='btn' @click = "update">SAVE</button>
            </div>
    </div>
 </template>

 <script>
 
 import dataObj from './data/dataObj'
 import tableHeadings from './data/tableHeadings'

 export default {
     data: function() {
        let fields = Object.assign({}, dataObj);
        return {
            fields: fields
        }
    },
     props: {
         saveTruck: Function
        },

     methods: {
        save(){
            let tempObj = Object.assign({}, dataObj)
        
                for (let i in tempObj) {
                    tempObj[i] = this.fields[i];
                }
            return tempObj;
        },

        update() {
            let newData = this.save();
            if (this.littleCheck(newData)){
                this.saveTruck(newData);
                this.$emit('close');
            } else this.$emit('close');
        },

        littleCheck(obj) {
            let check = 0;
            for (let key in obj) {
                if(obj[key].length > 0) check++;
            }
            return check;
        }
    }
 }
 </script>
 
 <style scoped>
    #btn {
        margin-top: 5px;
        margin-bottom: 10px;
        font-family: 'Mitr', sans-serif;
    }
    #input-div {
        padding-bottom: 3px;
    }
    input {
        text-indent: 7px;
        font-family: 'Mitr', sans-serif;
    }
    .container {
        background-color: #c6dbec;
    }
    h3 {
        font-size: 19px;
        color: #243447;
        font-family: 'Mitr', sans-serif;
    }
 </style>