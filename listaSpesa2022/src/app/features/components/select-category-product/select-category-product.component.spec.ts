import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategoryProductComponent } from './select-category-product.component';

describe('SelectCategoryProductComponent', () => {
  let component: SelectCategoryProductComponent;
  let fixture: ComponentFixture<SelectCategoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCategoryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
