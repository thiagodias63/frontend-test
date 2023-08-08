import {Component} from '@angular/core';
type organizarPorOpcoes = 'Recomendados' | 'Melhor Avaliados';
@Component({
  selector: 'organizar-listagem-reservas',
  template: `<div class="organizar-listagem-reservar__container">
    <span> Organizar por: </span>
    <a nz-dropdown [nzDropdownMenu]="menu">
      {{ organizarPorSelecionado }}
      <span nz-icon nzType="down"></span>
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu nzSelectable>
        <li (click)="alterarOrganizarPor('Recomendados')" nz-menu-item>Recomendados</li>
        <li (click)="alterarOrganizarPor('Melhor Avaliados')" nz-menu-item>Melhor Avaliados</li>
      </ul>
    </nz-dropdown-menu>
  </div>`,
  styles: [
    `
      .organizar-listagem-reservar__container {
        /* font-size: 0.625rem; */
      }
    `,
  ],
})
export class OrganizarListagemReservasComponent {
  organizarPorSelecionado: organizarPorOpcoes = 'Recomendados';
  alterarOrganizarPor(novoFiltro: organizarPorOpcoes): void {
    this.organizarPorSelecionado = novoFiltro;
  }
}
