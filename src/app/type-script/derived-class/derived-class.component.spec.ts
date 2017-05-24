import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivedClassComponent } from './derived-class.component';

describe('DerivedClassComponent', () => {
  let component: DerivedClassComponent;
  let fixture: ComponentFixture<DerivedClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivedClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivedClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
