import {TemplateRef} from "@angular/core";

export interface TableColumnFor<Item> {
  thText: string;
  key?: keyof Item;
  thTemplate?: TemplateRef<HTMLElement>;
  tdTemplate?: TemplateRef<HTMLElement>;
}
