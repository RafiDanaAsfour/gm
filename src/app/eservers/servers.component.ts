// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-servers',
//   // template: `
//   // <app-server></app-server>
//   // <app-server></app-server>`,
//   templateUrl:'./servers.component.html',
//   styleUrl: './servers.component.css'
// })
// export class ServersComponent {
//   allowNewServer= false;

//   getAllowNewServer(){
//     setTimeout(() => {
//       this.allowNewServer = true;},2);
//   }
// }
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-servers',
//   templateUrl: './servers.component.html',
//   styleUrls: ['./servers.component.css']
// })
// export class ServersComponent implements OnInit {
//   allowNewServer = false;
//   masseg='NoServer';

//   serverName = ''; // Variable to hold the server name input


//   servers=['TestSever' , 'TestSever 2']

//   ngOnInit() {
//     this.getAllowNewServer();
//   }

//   getAllowNewServer() {
//     setTimeout(() => {
//       this.allowNewServer = true;
//     }, 2000); // أضف هنا فترة زمنية أطول لتجربة التأخير
//   }

//   onCreat(){
//     this.masseg='server was created! the name is of server ' +this.serverName;
//     this.servers.push(this.serverName); // Add new server name to the array
//   }

//   upDatenameServer(event:Event){
//     //console.log(event);
//     this.serverName=(<HTMLInputElement>event.target).value;
//   }

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  masseg = 'No server was created!';
  serverName = '';
  servers = ['Testserver', 'Testserver 2']; // Array of server names

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreat() {
    this.masseg = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName); // Add new server name to the array
  }
}
