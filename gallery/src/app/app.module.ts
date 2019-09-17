import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { GroupComponent } from './components/group/group.component';
import { HttpClientModule } from '@angular/common/http'; 
import { GroupsComponent } from './components/groups/groups.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupEditComponent } from './components/group-edit/group-edit.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    EventComponent,
    GroupComponent,
    GroupsComponent,
    GroupDetailComponent,
    GroupEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
