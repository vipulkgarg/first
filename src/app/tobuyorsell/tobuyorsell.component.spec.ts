import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobuyorsellComponent } from './tobuyorsell.component';

describe('TobuyorsellComponent', () => {
  let component: TobuyorsellComponent;
  let fixture: ComponentFixture<TobuyorsellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobuyorsellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobuyorsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
