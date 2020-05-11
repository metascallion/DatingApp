import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalrService} from './_services/signalr.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ]
})
export class ConnectorModule { }
