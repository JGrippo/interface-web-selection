import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionComponent } from './selection.component';
import { SelectionService } from './selection.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SelectionComponent', () => {
  let component: SelectionComponent;
  let fixture: ComponentFixture<SelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectionComponent
      ],
      providers: [
        SelectionService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit on initialization', () => {
    const spy = spyOn(component, 'ngOnInit');

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should call getRooms on call', () => {
    const service = TestBed.get(SelectionService);
    const spy = spyOn(component, 'getRooms');

    component.getRooms();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  // it('should call methodTestEx on initialization', () => {
    //     let service = TestBed.get(SelectionService);
    //     let spy = spyOn(service, 'methodTestEx');

    //     fixture.detectChanges();

    //     expect(spy).toHaveBeenCalled();
    //   });
});
