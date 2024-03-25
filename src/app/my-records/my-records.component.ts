import { Component } from '@angular/core';

@Component({
  selector: 'app-my-records',
  templateUrl: './my-records.component.html',
  styleUrls: ['./my-records.component.css'],
})
export class MyRecordsComponent {
setDelete(_t40: any) {
throw new Error('Method not implemented.');
}
setUpdate(_t40: any) {
throw new Error('Method not implemented.');
}
CustomerArray: any;
save() {
throw new Error('Method not implemented.');
}
  records: any[] = [
    // Populate this array with your records data containing 'date' property
    { date: '2024-03-22', situation: 'Sample situation 1' },
    { date: '2024-03-23', situation: 'Sample situation 2' },
    // Add more records as needed
  ];
  showModal: boolean = false;
  selectedRecord: any;
situation: any;
thoughts: any;
feelings: any;

  showDetails(record: any) {
    this.selectedRecord = record;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
