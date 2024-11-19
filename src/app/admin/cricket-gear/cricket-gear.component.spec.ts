import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketGearComponent } from './cricket-gear.component';

describe('CricketGearComponent', () => {
  let component: CricketGearComponent;
  let fixture: ComponentFixture<CricketGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CricketGearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
