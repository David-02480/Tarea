import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCreateComponent } from './vehiculo-create.component';

describe('VehiculoCreateComponent', () => {
  let component: VehiculoCreateComponent;
  let fixture: ComponentFixture<VehiculoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
