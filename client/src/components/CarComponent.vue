<template>
  <ion-col size="4">
    <ion-card>
        <img :src="carProp.img" />
        <ion-card-header>
          <ion-card-subtitle>{{carProp.make}}</ion-card-subtitle>
          <ion-card-title>{{carProp.model}}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{carProp.description}}
        </ion-card-content>
      </ion-card>
    
  </ion-col>
</template>

<script lang="ts">
import { AppState } from '@/AppState';
import { computed, reactive } from 'vue';
export default {
  name: 'CarComponent',
  props: {
    carProp: {type: Object, required: true}
  },
  setup() {
    const state= reactive({
      cars: computed(()=> AppState.cars)
    })
    return {
     
    
    }
  }
}
</script>

<style scoped>

</style>