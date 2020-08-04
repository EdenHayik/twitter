import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowGridComponent } from './follow-grid.component';

describe('FollowGridComponent', () => {
  let component: FollowGridComponent;
  let fixture: ComponentFixture<FollowGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
