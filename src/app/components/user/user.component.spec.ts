import { TestBed } from "@angular/core/testing";
import { UserComponent } from "./user.component";

fdescribe('Component: Overflow', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  });
  it('should create the app', () =>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
