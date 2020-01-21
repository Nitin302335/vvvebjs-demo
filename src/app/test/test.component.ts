import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var Vvveb: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // const config = document.createElement('iframe') as HTMLIFrameElement;
    // const dv = document.createElement('divrame') as HTMLIFrameElement;
    // document.getElementsByTagName('body')[0].appendChild(config);
    setTimeout(() => {
      console.log('Vvveb', Vvveb);
      Vvveb.Builder.init('http://localhost:4200/template', function () {
        //load code after page is loaded here
        Vvveb.Gui.init();
      });
    }, 1000);
    console.log('Vvveb ffff');
  }

}
