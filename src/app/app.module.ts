import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { AppComponent } from './app.component';
import { RecordBookComponent } from './record-book/record-book.component'; // Import your custom component
import { MyRecordsComponent } from './my-records/my-records.component'; // Import other components if needed
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RecordBookComponent, // Include your custom component in declarations
    MyRecordsComponent // Include other components in declarations if needed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Include the routing module in imports
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
