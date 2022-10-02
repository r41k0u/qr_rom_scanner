<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title class="ion-text-center">Chip-08 Emulator Go brrrrrrrr</ion-title>
        </ion-toolbar>
      </ion-header>
      init()
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Chip-08 Emulator Go brrrrrrrr</ion-title>
          </ion-toolbar>
        </ion-header>
        <div id="wrapper">
        <div id="emulator">
        <canvas></canvas>
        <game-pad></game-pad>
        <background-change></background-change>     
        <binary-change></binary-change>
        <p id="romuint">>{{sharedStates.rom.at(0)}}</p>
      </div>
      </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,useIonRouter } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { states } from '../states'
  import GamePad from '../components/numpad.vue'
  import BinaryChange from '../components/binchange.vue'
  import BackgroundChange from '../components/colorchange.vue'
  window.addEventListener("DOMContentLoaded",()=>{
    require('../methods/chip8.js') 
  })

  
  export default defineComponent({
    name: 'Chip8Emu',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      GamePad,
      BinaryChange,
      BackgroundChange,
  },
  setup() {
    const sharedStates = states;

    console.log("baka", sharedStates);

    return {
      sharedStates
    };
  },
    }
  );
  
  </script>
  
  <style>
  #romunit{
    visibility: hidden;
  }
  #wrapper{
    display: flex;
    align-items: center;
  }
  #gamepad{
    align-self: center;
  }
  
  #emulator{
      width:max-content;
      margin: 0 auto;
      height: 45rem;
      display:flex;
      flex-direction: column;
  }
  
  #backsel{
    display: flex;
    align-self: center;
  }
  
  #pixsel{
    display:flex;
    align-self: center;
  }
  </style>
  