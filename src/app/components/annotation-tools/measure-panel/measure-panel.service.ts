import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MeasurePanelService {
  constructor() { }

  private _measureScaleState: BehaviorSubject<{visible:boolean, value: string}> = new BehaviorSubject<{visible:boolean, value: string}>({visible:false, value:''});
  public measureScaleState$: Observable<{visible:boolean, value: string}> = this._measureScaleState.asObservable();
  public setMeasureScaleState({visible:boolean, value: string = ''}): void {
    this._measureScaleState.next({visible:boolean, value: string});
  }

}
