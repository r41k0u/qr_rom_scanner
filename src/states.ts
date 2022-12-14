import { TextResult } from "capacitor-plugin-dynamsoft-barcode-reader";
import { reactive } from "vue";

export const states = reactive({
  QRCodeOnly: true,
  continuousScan: false,
  barcodeResults: [] as TextResult[],
  rom: [] as Uint8Array[],
});
