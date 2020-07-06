import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  ngOnDestroy(): void { }
}
