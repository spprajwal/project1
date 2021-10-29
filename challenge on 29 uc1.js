import { LightningElement,track } from 'lwc';

export default class CardAndText extends LightningElement {

    @track titlename;
    reflectTheText(event){
      this.titlename = this.template.querySelector('lightning-input').value;
    }

}