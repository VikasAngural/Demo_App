import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBeersComponent } from './favourite-beers.component';

describe('FavouriteBeersComponent', () => {
  let component: FavouriteBeersComponent;
  let fixture: ComponentFixture<FavouriteBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
