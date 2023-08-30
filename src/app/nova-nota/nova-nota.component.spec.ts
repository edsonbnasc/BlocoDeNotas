import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaNotaComponent } from './nova-nota.component';

describe('NovaNotaComponent', () => {
  let component: NovaNotaComponent;
  let fixture: ComponentFixture<NovaNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovaNotaComponent]
    });
    fixture = TestBed.createComponent(NovaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
