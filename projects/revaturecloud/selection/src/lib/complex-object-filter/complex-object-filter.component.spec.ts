import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexObjectFilterComponent } from './complex-object-filter.component';

describe('ComplexObjectFilterComponent', () => {
  let component: ComplexObjectFilterComponent;
  let fixture: ComponentFixture<ComplexObjectFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexObjectFilterComponent]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(ComplexObjectFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
