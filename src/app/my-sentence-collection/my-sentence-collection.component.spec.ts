import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySentenceCollectionComponent } from './my-sentence-collection.component';

describe('MySentenceCollectionComponent', () => {
  let component: MySentenceCollectionComponent;
  let fixture: ComponentFixture<MySentenceCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySentenceCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySentenceCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
