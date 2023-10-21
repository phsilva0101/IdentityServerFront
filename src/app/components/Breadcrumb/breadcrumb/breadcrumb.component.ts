import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Scroll,
} from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent {
  items: { label: string; url: string }[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    try {
      this.router.events.subscribe((event) => {
        if (
          event instanceof NavigationEnd ||
          (event instanceof Scroll &&
            event.routerEvent instanceof NavigationEnd)
        ) {
          this.items = [];
          this.createBreadcrumb(this.activatedRoute.root);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  private createBreadcrumb(route: ActivatedRoute, url: string = '') {
    console.log('route', route);
    if (
      route.routeConfig &&
      route.routeConfig.data &&
      route.routeConfig.data['breadcrumb']
    ) {
      const path = route.routeConfig.path;
      url += `/${path}`;
      this.items.push({
        label: route.routeConfig.data['breadcrumb'],
        url: url,
      });
    }

    if (route.firstChild) {
      this.createBreadcrumb(route.firstChild, url);
    }
  }
}
