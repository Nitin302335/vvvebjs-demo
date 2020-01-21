import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

// import * as vvvebjs from 'vvvebjs';

// import { Vvveb } from 'vvvebjs';
// var {Vvveb} = require('vvvebjs')
declare var Vvveb:any;
declare var launchFullScreen:any;
declare var Builder:any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'vvvebjs-demo';
  Data: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' }
  ];
  form: FormGroup

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      checkArray: this.fb.array([],[Validators.required])
    })
  }

  ngOnInit(){
    
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value)
  }

  // ngAfterViewInit() {
  //   // const config = document.createElement('iframe') as HTMLIFrameElement;
  //   // const dv = document.createElement('divrame') as HTMLIFrameElement;
  //   // document.getElementsByTagName('body')[0].appendChild(config);
  //   setTimeout(()=>{
  //     console.log('Vvveb',Vvveb);
  //     Vvveb.Builder.init('http://localhost:4200/test', function () {
  //       //load code after page is loaded here
  //       Vvveb.Gui.init();
  //     });
  //   },1000);
  //   console.log('Vvveb ffff');
  // }
}
