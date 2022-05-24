import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../investiments/components/list/list.component';

import { BankingComponent } from './banking.component';

/* describe: vai descrver oq q a gt vai testar */
describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      /* declarar os componentes q estão dentro do componente
      principal para testes. */
      declarations: [BankingComponent, ListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* testando os gets (U) = unidade */
  it(`(U) getPoupanca(): shoud have poupanca = 10`, () => {
    expect(component.getPoupanca).toEqual(10);
  });

  /* testando os gets */
  it(`(U) getCarteira(): shoud have carteira = 50`, () => {
    expect(component.getCarteira).toEqual(50);
  });

  /* testando as funcoes */
  it(`(U) setSacar(): shoud tranfer poupanca from carteira`, () => {
    component.setSacar('10');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  /* testando as funcoes */
  it(`(U) setDepositar(): shoud tranfer carteira from poupanca`, () => {
    component.setDepositar('50');
    /* fixture.detectChanges(); */

    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

  /* testando os if's */
  it(`(U) setSacar(): shoud tranfer poupanca dont have
    string (isNaN) or poupanca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  /* testando os if's */
  it(`(U) setDepositar(): shoud tranfer carteira dont have
    string (isNaN) or carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  /* I = interface. entao aq vamos fazer o teste de interface */
  it(`(I) setDepositar(): shoud tranfer carteira from poupanca`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');
  });

  /* I = interface. entao aq vamos fazer o teste de interface */
  it(`(I) setSacar(): shoud tranfer poupanca from carteira`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-carteira').textContent).toEqual('60');
  });
});
