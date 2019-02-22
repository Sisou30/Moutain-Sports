import { Component, TemplateRef,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-winter-home',
  templateUrl: './winter-home.component.html',
  styleUrls: ['./winter-home.component.scss']
})
export class WinterHomeComponent {
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  // @ViewChild('sidenav') sidenav: MatSidenav;
  // iconmenu: string = 'menu';
  
  // constructor() { }

  // SidenavOpen(){
  //   if(this.sidenav.opened == true) 
  //   {
  //     this.sidenav.close();
  //     this.iconmenu = 'menu';
  //   } 
  //   else{
  //     this.sidenav.open()
  //     this.iconmenu = 'arrow_back_ios';
  //   }  
  // }
  
}




// import { ElectronService } from '../../core/electron.service';
// import { BluetoothDevice } from '../../domain/bluetooth-device';
// import { BluetoothSerialPort } from 'bluetooth-serial-port';
// import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";
// import { MatDialog } from "@angular/material";
// import {FormControl} from '@angular/forms';

// Specialy from cordova and plugins
// declare var device;
// declare var bluetoothSerial: any;

// @Component({
//   selector: 'app-winter-home',
//   templateUrl: './winter-home.component.html',
//   styleUrls: ['./winter-home.component.scss']
// })

// /**
//  * Home component
//  */
// export class WinterHomeComponent implements OnInit {

//   public logs: string[];
//   public listBluetoothDevice: BluetoothDevice[];
//   public portName: string;
//   public devices: any;
//   public btSerial: BluetoothSerialPort;

//   events: string[] = [];
//   opened: boolean
//   /**
//    * 
//    * @param electron Service needed to call all pure require JS
//    * @param ref To detect changing outside scope (arrow method)
//    */
//   constructor(private electron: ElectronService,
//     private ref: ChangeDetectorRef,
//     public dialog: MatDialog) {
//     this.logs = [];
//   }

//   /**
//    * 
//    * @param error Call when there is error for bluetooth connect
//    * Open a new dialog
//    */
//   showError(error: string): void {
//     const dialogRef = this.dialog.open(ErrorDialogComponent, {
//       data: { errorMsg: error },
//       disableClose: true,
//       width: '300px'
//     });

//     Write in console after closing Dialog
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     });

//   }



//   /**
//    * Initialize BluetoothSerialPort Module at loading
//    */
//   ngOnInit() {

//     this.listBluetoothDevice = [];
//     var self = this;

//     // If mobiel support detected !
//     if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
//       document.addEventListener("deviceready", () => this.getBluetoothDeviceForMobileDevice());

//     // Code excecuted only on Desktop mode
//     } else {
//       this.btSerial = new (this.electron.btSerial).BluetoothSerialPort();
//       this.btSerial.on('found', (address, name) => {
//         // Complete Bluetooth Device
//         this.listBluetoothDevice.push(new BluetoothDevice(name, address));
//       });

//       this.btSerial.inquire();
//     }
//   }

//   /**
//    * Get list of Bluetooth Device
//    */
//   getBluetoothDeviceForMobileDevice() {

//     var self = this;
//     bluetoothSerial.list((devices) => {

//       devices.forEach((btdevice) => {

//         this.listBluetoothDevice.push(
//           new BluetoothDevice(btdevice.name, btdevice.address)
//         );

//       });
//       self.ref.detectChanges();
//     });
//   }


//   /**
//    * 
//    * @param name Name of Bluetooth Device: just to show
//    * @param address Address of Bluetooth Serial Port to open/write
//    */
//   connectAndWriteToSerialPort(name: string, address: string) {

//     Need at this moment because we want set variable outside the real scope (this component)
//     this.btSerial.findSerialPortChannel(address, (channel) => {
//       this.btSerial.connect(address, channel, () => {
//         this.portName = name;
//         this.writeLog('connected');
//         this.ref.detectChanges();

//         this.btSerial.write(Buffer.from('my data', 'utf-8'), (err) => {
//           if (err) this.writeLog(err.toString());
//         });

//         this.btSerial.on('data', (buffer) => {
//           this.writeLog('----------');
//           this.writeLog('Hex -> ' + buffer.toString('hex'));
//           this.writeLog('UTF8 -> ' + buffer.toString('utf-8'));
//           this.writeLog('----------');
//           this.ref.detectChanges();
//         });
//       }, () => {
//         this.writeLog('cannot connect');
//         this.ref.detectChanges();
//       });

//       close the connection when you're ready
//       this.btSerial.close();
//       this.ref.detectChanges();
//     }, () => {
//       this.showError('Unabled to connect at:' + name);
//       this.writeLog('found nothing');
//       this.ref.detectChanges();
//     });

//   }

//   /**
//    * 
//    * @param message TO DO : Add that method to new service to log
//    */
//   writeLog(message: string) {
//     console.log(message);
//     this.logs.splice(0, 0, message);
//   }

// }