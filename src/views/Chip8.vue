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
        <div id="wrapper" ref="foo">
        <div id="emulator">
          <game-screen></game-screen>
          <game-pad></game-pad>
          <background-change></background-change>     
          <binary-change></binary-change>
          <p id="romuint" style="visibility:hidden">{{sharedStates.rom.at(0)}}</p>
        </div>
      </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { states } from '../states'
  import GamePad from '../components/numpad.vue'
  import BinaryChange from '../components/binchange.vue'
  import GameScreen from '../components/canvas.vue'

  import BackgroundChange from '../components/colorchange.vue'
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
      GameScreen
  },
  mounted() {
      if(this.$refs.foo){
        require('../methods/chip8.js')
      }
  },
  setup() {
    const sharedStates = states;

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
  #emulator{
      width:max-content;
      margin: 0 auto;
      height: 45rem;
      display:flex;
      flex-direction: column;
  }
  
  </style>
  