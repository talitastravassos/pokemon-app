import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaughtPokemonsListComponent } from './caught-pokemons-list.component';

describe('CaughtPokemonsListComponent', () => {
  let component: CaughtPokemonsListComponent;
  let fixture: ComponentFixture<CaughtPokemonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaughtPokemonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaughtPokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
