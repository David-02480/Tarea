import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionListComponent } from './avion-list.component';

describe('AvionListComponent', () => {
  let component: AvionListComponent;
  let fixture: ComponentFixture<AvionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
