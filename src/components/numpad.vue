<template>
  <div id="gamepad">
    <ion-button id="but1" color="light">1</ion-button>
    <ion-button id="but2" color="light">2</ion-button>
    <ion-button id="but3" color="light">3</ion-button>
    <ion-button id="but4" color="light">C</ion-button><br>
    <ion-button id="butQ" color="light">4</ion-button>
    <ion-button id="butW" color="light">5</ion-button>
    <ion-button id="butE" color="light">6</ion-button>
    <ion-button id="butR" color="light">D</ion-button><br>
    <ion-button id="butA" color="light">7</ion-button>
    <ion-button id="butS" color="light">8</ion-button>
    <ion-button id="butD" color="light">9</ion-button>
    <ion-button id="butF" color="light">E</ion-button><br>
    <ion-button id="butZ" color="light">A</ion-button>
    <ion-button id="butX" color="light">0</ion-button>
    <ion-button id="butC" color="light">B</ion-button>
    <ion-button id="butV" color="light">F</ion-button>
</div>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: "GamePad",
    components: { 
      IonButton 
    },
  });
</script>