import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboCardComponent } from './jumbocard.component';

describe('JumboCardComponent', () => {
  let component: JumboCardComponent;
  let fixture: ComponentFixture<JumboCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JumboCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
