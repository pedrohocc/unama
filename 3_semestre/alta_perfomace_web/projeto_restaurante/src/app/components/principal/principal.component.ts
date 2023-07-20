import { Component, ElementRef } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
    const element = this._elementRef.nativeElement
    
    element.addEventListener('touchstart', { passive: true });
    element.addEventListener('scroll', { passive: true });
  }

}
