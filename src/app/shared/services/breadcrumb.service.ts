import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Breadcrumb, BreadcrumbCustomLabels } from '@app/models/common';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  updateBreadcrumbLabels: BehaviorSubject<BreadcrumbCustomLabels> =
    new BehaviorSubject<BreadcrumbCustomLabels>({});

  updateBreadcrumb: BehaviorSubject<Breadcrumb[]> = new BehaviorSubject<
    Breadcrumb[]
  >([]);

  constructor() {}

  updateLabels(labels: BreadcrumbCustomLabels) {
    this.updateBreadcrumbLabels.next(labels);
  }

  update(updateBreadcrumb: Breadcrumb[]) {
    this.updateBreadcrumb.next(updateBreadcrumb);
  }
}
