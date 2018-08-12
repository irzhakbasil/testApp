<template>
    <div>
        <input v-model = "property" placeholder="headings">
    </div>
</template>


<script>
import tableHeadings from './tableHeadings'
export default {
  props:['property', "headings"],

}
</script>
