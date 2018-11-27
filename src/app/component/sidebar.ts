import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';



@Component({
  selector: 'sidebar',
  template: ""
})
export class SideBarComponent implements OnDestroy, OnInit {
  private ui: webix.ui.menu;

  constructor(root: ElementRef) {
    this.ui = <webix.ui.menu>webix.ui({
      container: root.nativeElement,
      view: "menu", layout: "y", minHeight: 200, select: true,
      data: [
        { id: "html-layout", value: "HTML Layout" },
        { id: "webix-layout", value: "Webix Layout" },
        { id: "form-grid", value: "Form and Grid" }
      ]
    })

    this.ui.select("webix-layout", false);
  }

  ngOnInit() {
    this.ui.resize();
  }
  ngOnDestroy() {
    this.ui.destructor();
  }
}
