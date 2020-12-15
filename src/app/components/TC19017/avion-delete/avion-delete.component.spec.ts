import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionDeleteComponent } from './avion-delete.component';

describe('AvionDeleteComponent', () => {
  let component: AvionDeleteComponent;
  let fixture: ComponentFixture<AvionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
