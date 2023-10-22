import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { TableColumnsModel } from 'src/app/interfaces/Table/Table';

export interface PeriodicElement {
  id: number;
  descricao: string;
  local: string;
  data: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    descricao: 'Sede 1',
    local: 'Rua 1',
    data: '01/01/2021',
    status: 'Ativo',
  },
  {
    id: 2,
    descricao: 'Sede 2',
    local: 'Rua 2',
    data: '01/01/2021',
    status: 'Ativo',
  },
  {
    id: 3,
    descricao: 'Sede 3',
    local: 'Rua 3',
    data: '01/01/2021',
    status: 'Ativo',
  },
];

@Component({
  selector: 'app-buscar-sedes',
  templateUrl: './buscar-sedes.component.html',
  styleUrls: ['./buscar-sedes.component.css'],
})
export class BuscarSedesComponent {
  displayedColumns: string[] = [
    'select',
    'id',
    'descricao',
    'local',
    'data',
    'status',
  ];
  agendamentos = ELEMENT_DATA;
  selection = new SelectionModel<PeriodicElement>(false, []);
  isSelected = false;
  columnsLabels = [ 'ID', 'Descrição', 'Local', 'Data', 'Status'];
  columns = [ 'id', 'descricao', 'local', 'data', 'status'];

  buttons = [
    { label: 'Novo', action: 'novo' },
    { label: 'Editar', action: 'editar' },
    { label: 'Filtro', action: 'filtro' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.selection.changed.subscribe(
      (next) => (this.isSelected = this.selection.hasValue())
    );
  }
  handleButtonClick(event: any) {
    console.log('Ação do botão:', event.action, 'Dados da Linha:', event.row);
    // ... lide com o evento de click do botão ...
  }

  // Métodos para os botões
  novoAgendamento() {
    // Lógica para adicionar novo agendamento
  }

  editarAgendamento() {
    // Lógica para editar o agendamento selecionado
  }

  abrirFiltro() {
    // Lógica para abrir o filtro
  }
}
