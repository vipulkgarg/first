import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndlComponent } from './indl.component';

describe('IndlComponent', () => {
  let component: IndlComponent;
  let fixture: ComponentFixture<IndlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
