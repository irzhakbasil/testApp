<template>
 <div class="container">
    <h3>New Truck Info</h3>
    <div v-for="(value, key, index) in fields" :key='fields[index]'>
        <input v-model = 'fields[key]' placeholder = 'key'>
    </div>
    <div>
        <button id='btn' @click = "update">SAVE</button>
    </div>
    </div>
 </template>

 <script>
 import dataObj from './dataObj'
 import tableHeadings from './tableHeadings'
 export default {
     data: function() {
        let fields = Object.assign({}, tableHeadings);
        return {
            fields: fields
        }
    },
     props: ['saveTruck'],
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
 
 <style>
    #btn {
        margin-top: 5px;
    }
 </style>

 
