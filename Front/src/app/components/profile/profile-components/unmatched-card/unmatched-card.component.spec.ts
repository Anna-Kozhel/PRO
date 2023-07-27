import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmatchedCardComponent } from './unmatched-card.component';

describe('UnmatchedCardComponent', () => {
  let component: UnmatchedCardComponent;
  let fixture: ComponentFixture<UnmatchedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnmatchedCardComponent]
    });
    fixture = TestBed.createComponent(UnmatchedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
