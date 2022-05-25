import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigtebarComponent } from './navigtebar.component';

describe('NavigtebarComponent', () => {
  let component: NavigtebarComponent;
  let fixture: ComponentFixture<NavigtebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigtebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigtebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
