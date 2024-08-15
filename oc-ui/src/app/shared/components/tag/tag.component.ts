import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { EllipsisPipe } from "../../pipes/ellipsis.pipe";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzIconModule } from "ng-zorro-antd/icon";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  imports: [CommonModule, EllipsisPipe, NzToolTipModule, NzIconModule],
  standalone: true,
})
export class TagComponent {
  @Input({ required: true }) value!: string | null;
  @Input() type: string = 'default'
  @Input() tooltip!: string;
  @Input() closable: boolean = false;
  @Output() onClose = new EventEmitter();

  get displayedTooltip() {
    return this.tooltip || this.value;
  }
  get colorClass() {
    return this.colors[this.type];
  }

  colors: { [key: string]: string } = {
    green: "text-green-900 bg-green-200",
    "green-white": "text-white bg-green-500",

    blue: "text-blue-900 bg-blue-200",
    "blue-white": "text-white bg-blue-500",

    red: "text-red-900 bg-red-200",
    "red-white": "text-white bg-red-500",

    orange: "text-orange-900 bg-orange-200",
    "orange-white": "text-white bg-orange-500",

    purple: "text-purple-900 bg-purple-200",
    "purple-white": "text-white bg-purple-500",

    default: "text-black bg-gray-200 border-1",
  };
}
