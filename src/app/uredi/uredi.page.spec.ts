import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrediPage } from './uredi.page';

describe('UrediPage', () => {
  let component: UrediPage;
  let fixture: ComponentFixture<UrediPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UrediPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
