import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Batch.Wrapper.ComponentComponent } from './batch.wrapper.component.component';

describe('Batch.Wrapper.ComponentComponent', () => {
  let component: Batch.Wrapper.ComponentComponent;
  let fixture: ComponentFixture<Batch.Wrapper.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Batch.Wrapper.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Batch.Wrapper.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
