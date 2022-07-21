import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoundSettingsComponent } from './accound-settings.component';

describe('AccoundSettingsComponent', () => {
  let component: AccoundSettingsComponent;
  let fixture: ComponentFixture<AccoundSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoundSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoundSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
