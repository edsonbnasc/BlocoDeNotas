import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaCriadaComponent } from './nota-criada.component';

describe('NotaCriadaComponent', () => {
  let component: NotaCriadaComponent;
  let fixture: ComponentFixture<NotaCriadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaCriadaComponent]
    });
    fixture = TestBed.createComponent(NotaCriadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
