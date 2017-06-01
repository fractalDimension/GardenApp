import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedImagesListComponent } from './classified-images-list.component';

describe('ClassifiedImagesListComponent', () => {
  let component: ClassifiedImagesListComponent;
  let fixture: ComponentFixture<ClassifiedImagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedImagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedImagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
