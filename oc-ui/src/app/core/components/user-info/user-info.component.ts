import { Component } from "@angular/core";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzIconModule } from "ng-zorro-antd/icon";
import { TagComponent } from "../../../shared/components/tag/tag.component";

@Component({
  selector: "app-user-info",
  standalone: true,
  imports: [
    NzIconModule,
    NzAvatarModule,
    NzDropDownModule,
    NzDividerModule,
    TagComponent,
  ],
  templateUrl: "./user-info.component.html",
  styleUrls: [],
})
export class UserInfoComponent {
}
