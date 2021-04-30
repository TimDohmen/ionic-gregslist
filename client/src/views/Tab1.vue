<template>
  <ion-page >
    <ion-header class="row">
      <ion-toolbar>
        <ion-title>Cars</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="row">
      <!-- <ion-header collapse="condense" class="col-12">
        <ion-toolbar>
          <ion-title size="large">Carsz</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <ion-grid>
        <ion-row>
           <ion-item>
          <ion-label position="stacked">Car Data</ion-label>
          <ion-input v-model="state.newCar.make" placeholder="Make"></ion-input>
          <ion-input v-model="state.newCar.model" placeholder="Model"></ion-input>
          <ion-input v-model="state.newCar.description" placeholder="Description"></ion-input>
          <ion-input v-model="state.newCar.img" placeholder="Img"></ion-input>
          <ion-input name="price"  placeholder="Price" type="number" v-model="state.newCar.price"></ion-input>
          <section class="full-width">
        <ion-button expand="full" color="secondary" @click="createCar">Create Car!</ion-button>
      </section>
        </ion-item>
        </ion-row>
      <ion-row>
      <!-- <ExploreContainer name="Tab 1 page" /> -->
        <CarComponent v-for="car in state.cars" :key="car._id" :carProp="car"/>
      </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import CarComponent from '@/components/CarComponent.vue'
import { AppState } from '@/AppState';
import { computed, onMounted, reactive } from 'vue';
import {carsService} from '@/services/CarsService'
export default  { 
  name: 'Tab1',
    setup() {
      onMounted(()=>{
        carsService.getCars()
      })
    const state= reactive({
      cars: computed(()=> AppState.cars),
      newCar: {}
    })
    return {
     state,
     createCar(){
       carsService.createCar(state.newCar)
     }
    }
  },
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, CarComponent, IonInput, IonItem }
}
</script>