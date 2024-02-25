import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoLancamentoComponent } from './secao-lancamento.component';

describe('SecaoLancamentoComponent', () => {
  let component: SecaoLancamentoComponent;
  let fixture: ComponentFixture<SecaoLancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecaoLancamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecaoLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
