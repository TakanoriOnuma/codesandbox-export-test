import { DataTableHeader } from "vuetify";

export interface TableManagerHeader<T> extends DataTableHeader<T> {
  text: string;
  value: keyof T;
}

export class TableManager<T> {
  // template側で使用するのでpublicで公開する
  public itemKey: keyof T;
  public headers: TableManagerHeader<T>[] = [];
  public items: T[] = [];
  public selectedItems: T[] = [];

  constructor(itemKey: keyof T, headers: TableManagerHeader<T>[] = []) {
    this.itemKey = itemKey;
    this.headers = headers;

    // template側で呼び出すとthisの中身が変わってしまうのでbindする
    this.setItems = this.setItems.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  setItems(items: T[]) {
    this.items = items;
  }

  selectItem(selectedItem: T) {
    const index = this.selectedItems.findIndex(
      (item) => item[this.itemKey] === selectedItem[this.itemKey]
    );
    if (index === -1) {
      this.selectedItems.push(selectedItem);
    } else {
      this.selectedItems.splice(index, 1);
    }
  }
}
