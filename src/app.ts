import {Router} from 'aurelia-router';
import {RouterConfiguration} from 'aurelia-router';

export class App {
  router : Router;
  configureRouter(config : RouterConfiguration, router: Router) {        
    config.title = 'Aurelia';
    config.map([
        { route: ['','helloworld'],  name: 'helloworld',      moduleId: 'helloworld',      nav: true, title:'Hello world' },     
        { route: 'anotherpage',  name: 'anotherpage',      moduleId: 'anotherpage',      nav: true, title:'Anotherpage' },
        { route: 'fibonacci',  name: 'fibonacci',      moduleId: 'fibonacci',      nav: true, title:'Fibonacci' }
      ]);    
    this.router = router;
  }
}