import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { environment } from 'src/environments/environment';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { BarChartService } from './bar-chart.service';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: BarChartComponent}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    BarChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
