import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedFormComponent } from './news-feed-form.component';

describe('NewsFeedFormComponent', () => {
  let component: NewsFeedFormComponent;
  let fixture: ComponentFixture<NewsFeedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
