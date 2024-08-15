import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzMenuModule } from "ng-zorro-antd/menu";

const modules = [
  RouterModule,
  NzMenuModule,
  NzIconModule,
  NzDividerModule,
  CommonModule,
  NgOptimizedImage
];

@Component({
  selector: "app-side-nav",
  standalone: true,
  imports: [...modules],
  templateUrl: './side-nav.component.html',
  styleUrls: ["./side-nav.component.scss",]
})
export class SideNavComponent {
  @Input() isCollapsed: boolean = false;
  @Input() appName!: string;
  @Output() collapse: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

}
