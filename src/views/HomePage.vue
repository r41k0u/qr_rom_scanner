<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>QR Code Scanner</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="img">
        <img src="assets/gameover.png" />
      </div>
      <div class="startButton">
        <ion-button v-on:click="gotoScannerPage">Scan Games</ion-button>
      </div>
      <ion-list>
        <ion-list-header v-if="sharedStates.barcodeResults.length>0">
          <ion-label>Results:</ion-label>
        </ion-list-header>
        <ion-item v-bind:key="'result'+index" v-for="(result,index) in sharedStates.barcodeResults">
          <ion-label>{{result.barcodeFormat+": "+result.barcodeText}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>{{sharedStates.rom.at(0)}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonLabel, IonListHeader, IonItem, useIonRouter } from '@ionic/vue';
import { defineComponent } from 'vue';
import { states } from '../states'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem
  },

  setup() {
    const router = useIonRouter();
    const sharedStates = states;

    const gotoScannerPage = () => {
      router.push('/scanner');
    }

    return {
      sharedStates,
      gotoScannerPage
    };
  },


});

</script>

<style scoped>
.startButton, .img{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
}

.img {
  scale: 80%;
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
