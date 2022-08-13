<template>
<div>
    <input  v-model="money" placeholder="Конвертер валюты(РУБ)">
    <br><br>
    <div class="filter">{{ money | currency }}</div>
</div>
</template>
<script>

export default {
    data() {
        return {
            money: ''
        }
    },
    filters:{
        currency(val){
            
            if(Number(val)){
                val =[val + " RUB", (val/64).toFixed(4) + " EUR", (val/62).toFixed(4) + " USD"]

            }else{
                val = val
            }
            return val
        }
    }
}
</script>