import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* testanto se esta vindo os valores  do array de investiments */
  it('(U) should list investiments', () => {
    let investiments = component.investiments;

    expect(investiments.length).toBe(4);
    expect(investiments[0].name).toContain('Itaú');
    expect(investiments[3].name).toContain('Next');
  });

  /* testando a interface */
  it('(I) should list investiments', () => {
    let investiments =
      fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

    expect(investiments.length).toBe(4);
    /* .trim remove espaços finais e eniciais,
    aq removemos os espaços de Itaú | 100 */
    expect(investiments[0].textContent.trim()).toEqual('Itaú | 100');
    expect(investiments[3].textContent.trim()).toEqual('Next | 100');
  });
});
