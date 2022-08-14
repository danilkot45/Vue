<template>
<div>
    <input  v-model="money" placeholder="Конвертер валюты(РУБ)">
    <br><br>
    <div class="filter">{{ money | currency }}</div>
</div>
</template>
<script>

export default {
    name: 'AppMoneyFilters',
    data() {
        return {
            money: ''
        }
    },
    filters:{
        currency(val){
            
            if(Number(val)){
                let Rub = val.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + " RUB"
                let Eur = (val/64).toFixed(2).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + " EUR"
                let Usd = (val/62).toFixed(2).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + " USD"
                val =[Rub, Eur, Usd]

            }0
            return val
        }
    }
}
</script>