import { Component } from '@angular/core';
import { LoadingService } from '../../Services/loading.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading: Subject<boolean> = this._LoadingService.isLoading;

  constructor(private _LoadingService:LoadingService) { }
}
