import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFilesComponent } from './body-files.component';

describe('BodyFilesComponent', () => {
  let component: BodyFilesComponent;
  let fixture: ComponentFixture<BodyFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
