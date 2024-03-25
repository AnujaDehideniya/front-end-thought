import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './record-book.component.html',
  styleUrls: ['./record-book.component.css'],
  providers: [DatePipe],
})
export class RecordBookComponent {
  CustomerArray: any[] = [];
  isResultLoaded = false;
  situation: string = "";
  thoughts: string = "";
  feelings: string = "";
  actions: string = "";
  currentCustomerID = "";
  currentDate: string = '';
  entries: any;

  constructor(private datePipe: DatePipe, private http: HttpClient) {
    const currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.currentDate = currentDate ? currentDate : '';

    this.getAllCustomer(); // Fetch customers on component initialization
  }

  getAllCustomer() {
    this.http.get("http://localhost:8080/api/v1/customer/getAll")
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData);
        this.CustomerArray = resultData;
      });
  }

  register() {
    let bodyData = {
      "situation": this.situation,
      "thoughts": this.thoughts,
      "feelings": this.feelings,
      "actions": this.actions
    };

    this.http.post("http://localhost:8080/api/v1/customer/save", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Entry Registered Successfully");
      this.getAllCustomer();
      this.resetForm();
    });
  }

  updateRecords() {
    let bodyData = {
      "customerid": this.currentCustomerID,
      "situation": this.situation,
      "thoughts": this.thoughts,
      "feelings": this.feelings,
      "actions": this.actions,
    };

    this.http.put("http://localhost:8080/api/v1/customer/update", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Entry Updated Successfully");
      this.getAllCustomer();
      this.resetForm();
    });
  }

  save() {
    if (this.currentCustomerID == '') {
      this.register();
    } else {
      this.updateRecords();
    }
  }

  setDelete(data: any) {
    this.http.delete("http://localhost:8080/api/v1/customer/deletecustomer" + "/" + data.customerid, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Entry Deleted Successfully");
      this.getAllCustomer();
      this.resetForm();
    });
  }

  resetForm() {
    this.situation = '';
    this.thoughts = '';
    this.feelings = '';
    this.actions = '';
    this.currentCustomerID = '';
  }
}
