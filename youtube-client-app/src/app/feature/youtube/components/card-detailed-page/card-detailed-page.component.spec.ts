import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailedPageComponent } from './card-detailed-page.component';

describe('CardDetailedPageComponent', () => {
  let component: CardDetailedPageComponent;
  let fixture: ComponentFixture<CardDetailedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDetailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
