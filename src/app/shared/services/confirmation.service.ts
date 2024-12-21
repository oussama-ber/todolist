import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  #openConfirmationSignal = signal(false);
  confirmationModelIsOpened = this.#openConfirmationSignal.asReadonly();

  #itemIdSignal = signal<number>(0);
  itemIdToDelete = this.#itemIdSignal.asReadonly();


  confirmationModelOn(itemId: number) {
    this.#openConfirmationSignal.set(true);
    this.#itemIdSignal.set(itemId);
    console.log('confirmationModelIsOpened', this.confirmationModelIsOpened());
    console.log('itemIdToDelete', this.itemIdToDelete());
  }

  confirmationModelOff(){
    this.#openConfirmationSignal.set(false);
    this.#itemIdSignal.set(0);
  }
}
