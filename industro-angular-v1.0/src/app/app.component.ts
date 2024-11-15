import { Component, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

declare var jQuery: any;
declare var initializeOnReady: any;
declare var initializeOnLoad: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'industro';

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateTheme(event.url);
      });
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.reinitializeThings();
      });
  }
  
  reinitializeThings() {
    console.log("reinitializeThings");
    (function ($) {
      setTimeout(function () {
        initializeOnLoad();
        initializeOnReady();
      }, 500);
    })(jQuery);
  }

  updateTheme(url: string) {
    switch (url) {
      case "/index4": 
      case "/index9":
      case "/index10":
        this.loadStyle('skin-2');
        break;

      case "/index5":
        this.loadStyle('skin-4');
        break;

      case "/index3":
        this.loadStyle('skin-7');
        break;

      case "/index2":
      case "/index6":
      case "/index12":
        this.loadStyle('skin-9');
        break;
    
      default:
        this.loadStyle('skin-1');
        break;
    }
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    
    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    let logoLink = this.document.getElementById(
      'headLogoId'
    ) as HTMLImageElement;
    let logoLink2 = this.document.getElementById(
      'headLogoId2'
    ) as HTMLImageElement;
    let flogo1 = this.document.getElementById(
      'footerLogo1'
    ) as HTMLImageElement;
    let flogo2 = this.document.getElementById(
      'footerLogo2'
    ) as HTMLImageElement;
    let flogo3 = this.document.getElementById(
      'footerLogo3'
    ) as HTMLImageElement;

    let index = styleName.split("-")[1];
    if(logoLink){
      logoLink.src = "assets/images/logo-" + index + ".png";
    } else if(logoLink2){
      logoLink2.src = "assets/images/logo-white.png";
    }
    
    if(flogo1){
      flogo1.src = "assets/images/logo-" + index + "-light.png";
    } else if (flogo2){
      flogo2.src = "assets/images/logo-" + index + "-light.png";
    } else if(flogo3){
      flogo3.src = "assets/images/logo-" + index + "-light.png";
    }
    
    if (themeLink) {
      themeLink.href = "assets/css/skin/" + styleName + ".css";
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = "assets/css/skin/" + `${styleName}` + ".css";

      head.appendChild(style);
    }
  }

}
