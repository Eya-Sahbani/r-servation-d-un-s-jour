import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisimenbreComponent } from './choisimenbre.component';

describe('ChoisimenbreComponent', () => {
  let component: ChoisimenbreComponent;
  let fixture: ComponentFixture<ChoisimenbreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisimenbreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoisimenbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
