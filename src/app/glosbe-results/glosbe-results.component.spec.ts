import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlosbeResultsComponent } from './glosbe-results.component';

describe('GlosbeResultsComponent', () => {
  let component: GlosbeResultsComponent;
  let fixture: ComponentFixture<GlosbeResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlosbeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlosbeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
