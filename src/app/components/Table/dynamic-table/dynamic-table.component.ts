import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumnsModel } from 'src/app/interfaces/Table/Table';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent {
  @Input() data: any[] = []; // os dados a serem exibidos
  @Input() columns: string[] = [];
  @Input() columnLabels: string[] = []; // os identificadores das colunas
  @Input() buttons: any[] = [];
  @Output() buttonClick = new EventEmitter<any>();

  dataSource!: MatTableDataSource<any>;
  selectedRows = new Set<any>();
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor() {}

  ngOnInit() {
    console.log('columns', this.columns);
    console.log('data', this.data);
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }

  onRowToggle(row: any) {
    if (this.selectedRows.has(row)) {
      this.selectedRows.delete(row);
    } else {
      this.selectedRows.add(row);
    }
  }

  onButtonClick(action: string) {
    // Emita o evento de click com a ação e o conjunto de linhas selecionadas
    this.buttonClick.emit({
      action,
      selectedRows: Array.from(this.selectedRows),
    });
  }

  hasSelection(): boolean {
    return this.selectedRows.size > 0;
  }

}
