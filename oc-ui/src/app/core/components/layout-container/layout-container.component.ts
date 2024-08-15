import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { environment } from '../../../../environments/environment';

const modules = [RouterOutlet, NzLayoutModule, NzMessageModule, NzNotificationModule]
const components = [HeaderComponent, SideNavComponent]

@Component({
  selector: 'app-layout-container',
  standalone: true,
  imports: [...modules, ...components],
  templateUrl: './layout-container.component.html',
  providers: [],
})
export class LayoutContainerComponent {
  isCollapsed = false;
  pageList!: string[];
  currentYear!: number;
  appName: string = environment.appName

  constructor(private router: Router) {
    this.currentYear = new Date().getFullYear()

    router.events.forEach((event: any) => {
      if (event instanceof NavigationEnd) {
        this.pageList = []
        this.pageList = this.pageList.concat(event.url.substring(1).split('/').slice().filter((item) => item !== ''))
      }
    })
  }
}
