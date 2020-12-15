import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionUpdateComponent } from './avion-update.component';

describe('AvionUpdateComponent', () => {
  let component: AvionUpdateComponent;
  let fixture: ComponentFixture<AvionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
