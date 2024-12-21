import { Injectable, effect, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  #sidebarSignal = signal(false);
  sidebarIsOpened = this.#sidebarSignal.asReadonly();

  #sidebarExpandedSignal = signal(false);
  sidebarIsExpanded = this.#sidebarExpandedSignal.asReadonly();

  sidebarOn(){
    this.#sidebarSignal.set(true);
  }

  sidebarOff(){
    this.#sidebarSignal.set(false);
  }

  sidebarToggle(){
    this.#sidebarSignal.update((prv)=> !prv);
  }

  sidebarExpandedOn(){
    this.#sidebarExpandedSignal.set(true);
  }

  sidebarExpandedOff(){
    this.#sidebarExpandedSignal.set(false);
  }

  sidebarExpandedToggle(){
    this.#sidebarExpandedSignal.update((prv)=> !prv);
  }
}
