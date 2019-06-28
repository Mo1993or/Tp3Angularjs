import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMeteoComponent } from './liste-meteo.component';

describe('ListeMeteoComponent', () => {
  let component: ListeMeteoComponent;
  let fixture: ComponentFixture<ListeMeteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMeteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
