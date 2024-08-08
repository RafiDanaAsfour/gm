import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEdit2Component } from './shopping-edit2.component';

describe('ShoppingEdit2Component', () => {
  let component: ShoppingEdit2Component;
  let fixture: ComponentFixture<ShoppingEdit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingEdit2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingEdit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
