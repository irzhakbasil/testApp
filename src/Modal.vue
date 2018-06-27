 <template>
 <div class="container">
    <h3>New Truck Info</h3>
    <div>
        <input v-model = 'callControl' placeholder="Call Control">
    </div>
    <div>
        <input v-model = 'read' placeholder="Read">
    </div>
    <div>
        <input v-model = 'soundAutoCall' placeholder="Sound Auto Call">
    </div>
    <div>
        <input v-model = 'truck' placeholder="Truck">
    </div>
    <div>
        <input v-model = 'origin' placeholder="Origin"> 
    </div>
    <div>  
        <input v-model = 'destination' placeholder="Destination">
    </div>
    <div>
        <input v-model = 'pickup' placeholder="Pickup">
    </div>
    <div>
        <input v-model = 'dho' placeholder="DH-O">    
    </div>
    <div>
        <input v-model = 'dhd' placeholder="DH-D">    
    </div>
    <div>
        <input v-model = 'fp' placeholder="FP">    
    </div>
    <div>
        <input v-model = 'length' placeholder="Length">
    </div>
    <div>
        <input v-model = 'weight' placeholder="Weight">
    </div>
    <div>
        <input v-model = 'trip' placeholder="Trip">
    </div>
    <div>
        <input v-model = 'alarm' placeholder="Alarm">
    </div>
    <div>
        <input v-model = 'actions' placeholder="Actions">
    </div>
    <button id='btn' @click = "update">SAVE</button>
    </div>
 </template>

 <script>

 export default {
     data: function() {
        return {
            callControl: '',
            read: '',
            soundAutoCall: '',
            truck: '',
            origin: '',
            destination: '',
            pickup: '',
            dho: '',
            dhd: '',
            fp: '',
            length: '',
            weight: '',
            trip: '',
            alarm: '',
            actions: ''
        }
    },
     props: ['saveTruck'],
     methods: {
        save(){
            let tempObj = {
                callControl: '',
                read: '',
                soundAutoCall: '',
                truck: '',
                origin: '',
                destination: '',
                pickup: '',
                dho: '',
                dhd: '',
                fp: '',
                length: '',
                weight: '',
                trip: '',
                alarm: '',
                actions: ''
            }
         tempObj.callControl = this.callControl;
         tempObj.read = this.read;
         tempObj.soundAutoCall = this.soundAutoCall;
         tempObj.truck = this.truck;
         tempObj.origin = this.origin;
         tempObj.destination = this.destination;
         tempObj.pickup = this.pickup;
         tempObj.dho = this.dho;
         tempObj.dhd = this.dhd;
         tempObj.fp = this.fp;
         tempObj.length = this.length;
         tempObj.weight = this.weight;
         tempObj.trip = this.trip;
         tempObj.alarm = this.alarm;
         tempObj.actions = this.actions;
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
 

 
