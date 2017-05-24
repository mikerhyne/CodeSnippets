import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrowFunctionsComponent } from './type-script/arrow-functions/arrow-functions.component';
import { AssignmentsComponent } from './type-script/assignments/assignments.component';
import { ConstructorsComponent } from './type-script/constructors/constructors.component';
import { DerivedClassComponent } from './type-script/derived-class/derived-class.component';
import { EnumComponent } from './type-script/enum/enum.component';
import { GenericsComponent } from './type-script/generics/generics.component';
import { SendEmailComponent } from './csharp/send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrowFunctionsComponent,
    AssignmentsComponent,
    ConstructorsComponent,
    DerivedClassComponent,
    EnumComponent,
    GenericsComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
