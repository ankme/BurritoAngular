import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef} from "@angular/core";
import {Pagination, SortDirection} from "../misc/table.type";
import {TableColumnFor} from "./my-table.type";

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
}) export class MyTableComponent<Item> {

  @Input() public items: Item[] = [];
  @Input() public columns: TableColumnFor<Item>[] = [];
  @Input() public rowTemplate?: TemplateRef<HTMLElement>;
  @Input() public sortByColumn?: TableColumnFor<Item>;
  @Input() public sortDirection = SortDirection.ASC;
  @Output() public changeSortByColumn = new EventEmitter<TableColumnFor<Item>>();
  @Output() public changeSortDirection = new EventEmitter<SortDirection>();
  @Output() public changePagination = new EventEmitter<Pagination>();
  public readonly SortDirection = SortDirection;
}
