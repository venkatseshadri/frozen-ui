import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainPaneComponent } from './main-pane/main-pane.component';
import { WidgetComponent } from './main-pane/widget/widget.component';
import { GraphPanelComponent } from './main-pane/graph-panel/graph-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPaneComponent,
    WidgetComponent,
    GraphPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent,MainPaneComponent,WidgetComponent]
})
export class AppModule { }
