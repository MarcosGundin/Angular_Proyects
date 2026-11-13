import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomponent } from './mycomponent';

describe('Mycomponent', () => {
  let component: Mycomponent;
  let fixture: ComponentFixture<Mycomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mycomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mycomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
