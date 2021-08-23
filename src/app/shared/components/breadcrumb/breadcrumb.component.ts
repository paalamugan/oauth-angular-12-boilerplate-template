import { Component, Input, OnInit } from '@angular/core';
import { Breadcrumb, BreadcrumbCustomLabels } from '@app/models/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  PRIMARY_OUTLET,
  RoutesRecognized,
} from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { BreadcrumbService } from '@app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];
  @Input() bgColor = 'transparent';
  @Input() fontSize = '15px';
  @Input() fontColor = '#0275d8';
  @Input() lastLinkColor = 'rgba(0,0,0,0.6)';
  @Input() symbol = ' > ';
  params: { [key: string]: any } = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadCrumbData();
  }

  ngOnInit() {
    this.breadcrumbService.updateBreadcrumbLabels.subscribe(
      (data: BreadcrumbCustomLabels) => {
        for (const label in data) {
          if (data.hasOwnProperty(label)) {
            this.breadcrumbs.map((breadcrumb) => {
              const labelParams = breadcrumb.label.match(/[^{{]+(?=\}})/g);
              if (labelParams) {
                for (const labelParam of labelParams) {
                  const dynamicData = data[label] as any;
                  if (labelParam === label) {
                    breadcrumb.label = breadcrumb.label.replace(
                      '{{' + labelParam + '}}',
                      dynamicData
                    );
                  }
                }
              }
            });
          }
        }
      }
    );

    this.breadcrumbService.updateBreadcrumb.subscribe(
      (breadcrumbs: Breadcrumb[]) => {
        this.updateData(this.activatedRoute, breadcrumbs);
      }
    );
  }

  breadCrumbData(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter((route) => route.outlet === PRIMARY_OUTLET))
      .subscribe((route) => {
        this.params = route.snapshot.params;
        this.updateData(route, null);
      });
  }

  private updateData(
    route: ActivatedRoute,
    breadcrumbs: Breadcrumb[] | null
  ): void {
    if (route.snapshot.data.breadcrumb || breadcrumbs?.length) {
      const data = route.snapshot.data.breadcrumb
        ? route.snapshot.data.breadcrumb
        : breadcrumbs;
      const breadcrumb = JSON.parse(JSON.stringify(data));
      breadcrumb.map((crumb: { url: string; label: string }) => {
        const urlChunks = crumb.url?.split('/') || [];
        for (const chunk of urlChunks) {
          if (chunk.includes(':')) {
            const paramID = chunk.replace(':', '');
            const routerParamID = this.params[paramID];
            crumb.url = crumb.url.replace(`:${paramID}`, routerParamID);
          }
        }

        const labelParams = crumb.label.match(/[^{{]+(?=\}})/g);
        if (labelParams) {
          for (const labelParam of labelParams) {
            const routerParamID = this.params[labelParam.trim()];
            if (routerParamID) {
              crumb.label = crumb.label.replace(
                '{{' + labelParam + '}}',
                routerParamID
              );
            } else {
            }
          }
        }
      });
      this.breadcrumbs = breadcrumb;
    } else {
      this.breadcrumbs = [];
    }
  }
}
