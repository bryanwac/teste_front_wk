import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalAlertasComponent } from './modal-alertas.component';

describe('ModalAlertasComponent', () => {
  let component: ModalAlertasComponent;
  let fixture: ComponentFixture<ModalAlertasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAlertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
