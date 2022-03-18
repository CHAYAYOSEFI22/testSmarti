import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule  }    from '@angular/common/http';
import { IndexComponent } from './user/index/index.component';
import { ViewComponent } from './user/view/view.component';
import { CreateComponent } from './user/create/create.component';
import { EditComponent } from './user/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
