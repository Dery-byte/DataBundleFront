import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Databundle';

  constructor(private router: Router) {}

  showHeaderAndFooter(): boolean {
    return !this.router.url.startsWith('/admin'); // Hide for admin routes
  }

  ngOnInit(): void {
    this.loadScript('assets/lib/wow/wow.min.js')
   this.loadScript('assets/lib/owlcarousel/owl.carousel.min.js')

 }





  loadScript(scriptUrl: string): void {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }
}
