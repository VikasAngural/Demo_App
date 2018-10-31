import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBeersComponent } from './home-beers.component';

describe('HeaderBeersComponent', () => {
  let component: HeaderBeersComponent;
  let fixture: ComponentFixture<HeaderBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
