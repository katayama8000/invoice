<template>
  <div style="color:white;">
       <select v-model="selected">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id" style="color:black;">
                {{ option.name }}
            </option>
        </select>
        <p style="color:white;">{{ selected }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            selected: [],
            options: [
                    { id: 1, name: '夏目漱石' },
                    { id: 2, name: '太宰治' },
                    { id: 3, name: '村上春樹' }
                ]
        }
    }
}
</script>
