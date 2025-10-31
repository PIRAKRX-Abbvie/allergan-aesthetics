import { ElementRef } from "@angular/core";

export const markAsShown = (componentDiv: ElementRef) => {
  const element = componentDiv.nativeElement;
  const viewportOffset = element.getBoundingClientRect();
  const top = viewportOffset.top;
  if (top <= 200) {
    element.classList.add('shown');
  }
}