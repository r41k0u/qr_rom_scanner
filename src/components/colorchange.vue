<template>
    <div id="backsel">
     <ion-button id="red" color="light">red</ion-button>
     <ion-button id="blue" color="light">blue</ion-button>
     <ion-button id="black" color="light">black</ion-button>
     <ion-button id="white" color="light">white</ion-button>
     <ion-button id="green" color="light">green</ion-button>
     <ion-button id="yellow" color="light">yellow</ion-button>
    </div>
   </template>
   
   <script lang="ts">
     import { IonButton } from '@ionic/vue';
     import { defineComponent } from 'vue';
     export default defineComponent({
       name: "BackgroundChange",
       components: { 
         IonButton 
       },
     });
   </script>