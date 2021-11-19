import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';
import {Burrito} from "./misc/burrito.type";
import {TableColumnFor} from "./my-table/my-table.type";
import {BurritoService} from "./burrito.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('tdAlertTemplate') public tdAlertTemplate!: TemplateRef<HTMLElement>;
  public burritoTableColumns: TableColumnFor<Burrito>[] = [];

  public constructor (
    public burritoService: BurritoService,
  ) { }

  public ngAfterViewInit(): void {
    this.burritoTableColumns = [
      { thText: 'Rice', key: "rice" },
      { thText: 'Beanz', key: "beans" },
      { thText: 'Cheese!', key: "cheese" },
      { thText: 'Alert', tdTemplate: this.tdAlertTemplate },
    ];
  }

  public showAlertFor(item: Burrito): void {
    alert(`You have chosen wisely.
    The beans are of ${item.beans},
    the rice of of ${item.rice},
    and the cheese of ${item.cheese}.`);
  }

}
