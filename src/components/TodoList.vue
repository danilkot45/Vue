<template>
    <li class="list-group-item">
        <button :class="color" @click="$emit('click', done)">{{ btntext }}</button> {{ text }}
    </li>
</template>

<script>

export default {

    // props:['text','id','color','btntext','done'],
    props: {
        text: String,
        id: Number,
        color: String,
        btntext: String,
        done: Boolean
    }
}
</script>