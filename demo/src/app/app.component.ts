import { Component, OnInit } from '@angular/core';
import { storage, BaseStorage } from '../../../src/main';
import { BaseBrowserStorage } from '../../../src/storage/';


@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Demo Core Roraima';
  localStorage: BaseStorage<string, string>;
  sessionStorage: BaseStorage<string, string>;
  memoryStorage: BaseStorage<string, string>;
  constructor(){
    this.localStorage = storage('local');
    this.sessionStorage = storage('session');
    this.memoryStorage = storage('memory');

    this.localStorage.set('prueba', 'jefferson local');
    this.sessionStorage.set('prueba', 'jefferson session');
    this.memoryStorage.set('prueba', 'jefferson memory');
  }

  ngOnInit(){
    console.log(this.sessionStorage instanceof BaseBrowserStorage);
    console.log(this.localStorage.get('prueba'), '\n');
    console.log(this.sessionStorage.get('prueba'), '\n');
    console.log(this.memoryStorage.get('prueba'), '\n');
    window.setTimeout(()=>{
       this.localStorage.remove('prueba'); 
       this.sessionStorage.remove('prueba'); 
       this.memoryStorage.remove('prueba'); 
    }, 3000);

    window.setTimeout(()=>{
      console.log(this.localStorage.get('prueba'), '\n');
      console.log(this.sessionStorage.get('prueba'), '\n');
      console.log(this.memoryStorage.get('prueba'), '\n'); 
    }, 4000);
  }
}
