import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showPolicies: boolean = false;
  showAboutUs: boolean = false
  showPaymentMethods: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  changeStatePolicies() {
    this.showPolicies = !this.showPolicies;
  }

  changeStateAboutUs() {
    this.showAboutUs = !this.showAboutUs;
  }

  changeStatePaymentsMethods(){
    this.showPaymentMethods = !this.showPaymentMethods;
  }

}
