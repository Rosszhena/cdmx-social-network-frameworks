import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPafeComponent } from './not-found-pafe.component';

describe('NotFoundPafeComponent', () => {
  let component: NotFoundPafeComponent;
  let fixture: ComponentFixture<NotFoundPafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundPafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
