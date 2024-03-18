import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSideNavComponent } from './fixed-side-nav.component';

describe('FixedSideNavComponent', () => {
  let component: FixedSideNavComponent;
  let fixture: ComponentFixture<FixedSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixedSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
