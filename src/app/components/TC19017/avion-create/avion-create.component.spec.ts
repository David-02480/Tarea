import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionCreateComponent } from './avion-create.component';

describe('AvionCreateComponent', () => {
  let component: AvionCreateComponent;
  let fixture: ComponentFixture<AvionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
