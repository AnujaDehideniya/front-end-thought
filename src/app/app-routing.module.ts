import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordBookComponent } from './record-book/record-book.component';
import { MyRecordsComponent } from './my-records/my-records.component';

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: 'record-book', pathMatch: 'full' },
  { path: 'record-book', component: RecordBookComponent },
  { path: 'my-records', component: MyRecordsComponent },
  { path: '**', component: RecordBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
