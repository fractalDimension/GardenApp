import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridfsUploadComponent } from './gridfs-upload.component';

describe('GridfsUploadComponent', () => {
  let component: GridfsUploadComponent;
  let fixture: ComponentFixture<GridfsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridfsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridfsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
