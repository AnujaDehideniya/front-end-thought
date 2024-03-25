import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordBookComponent } from './record-book.component';

describe('RecordBookComponent', () => {
  let component: RecordBookComponent;
  let fixture: ComponentFixture<RecordBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecordBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
