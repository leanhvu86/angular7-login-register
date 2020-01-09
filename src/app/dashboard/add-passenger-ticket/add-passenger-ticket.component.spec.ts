import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassengerTicketComponent } from './add-passenger-ticket.component';

describe('AddPassengerTicketComponent', () => {
  let component: AddPassengerTicketComponent;
  let fixture: ComponentFixture<AddPassengerTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPassengerTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassengerTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
