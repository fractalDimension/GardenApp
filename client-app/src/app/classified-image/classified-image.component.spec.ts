import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedImageComponent } from './classified-image.component';

describe('ClassifiedImageComponent', () => {
  let component: ClassifiedImageComponent;
  let fixture: ComponentFixture<ClassifiedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
