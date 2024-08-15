import { Component, OnInit, signal } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { UserInfoComponent } from "../user-info/user-info.component";


const modules = [NzIconModule, NzLayoutModule, NzPageHeaderModule];
const components = [UserInfoComponent];

@Component({
  selector: "app-header",
  standalone: true,
  imports: [...modules, ...components],
  template: `
    <nz-header class="p-0 w-full z-2">
      <div
          class="relative h-16 bg-white shadow-sm flex justify-between items-center px-6"
      >
        <nz-page-header class="p-0" [nzTitle]="titles" nzBackIcon>
          <ng-template #titles>
            <span>{{ title() }}</span>
          </ng-template>
        </nz-page-header>
        <div class="flex gap-4">
          <app-user-info />
        </div>
      </div>
    </nz-header>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  title = signal<string>("");
  activeRouteParts = signal<string[]>([]);


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.switchTitleOnRouteChange();
  }

  private switchTitleOnRouteChange(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const activeRouteParts = val.url.substring(1).split("/");
        this.activeRouteParts.set(activeRouteParts)
        this.setTitleBasedOnRoute(activeRouteParts);
      }
    });
  }

  private setTitleBasedOnRoute(routeParts: string[]): void {
    switch (routeParts[0]) {
      case "theme":
        this.title.set("Theme");
        break;
      case "11s":
        this.title.set("Test");
        break;
      case "transactions":
        this.title.set("Transactions");
        break;
      default:
        break;
    }
  }
}
