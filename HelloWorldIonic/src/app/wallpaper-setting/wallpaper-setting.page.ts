import { Component, OnInit } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-wallpaper-setting',
  templateUrl: './wallpaper-setting.page.html',
  styleUrls: ['./wallpaper-setting.page.scss'],
})
export class WallpaperSettingPage implements OnInit {
  images = [
    'https://images.unsplash.com/photo-1626080308314-d7868286cce2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1622190054616-115e3998d2e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1544212603-be75d7dc364c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
  ];
  public storageDirectory: any;
  constructor(
    private transfer: FileTransfer, private file: File
  ) { }

  ngOnInit() {
  }

  setWallpaper(url) {

    const fileTransfer: FileTransferObject = this.transfer.create();
    this.storageDirectory = this.file.externalRootDirectory + 'Download/';

    const name = new Date().getTime() + '.jpeg';
    fileTransfer.download(url, this.storageDirectory + name, true).then(
      (entry) => {
        alert('Berhasil download dan tersimpan di : ' + this.storageDirectory + name);
        window['plugins'].wallpaper.setImage(this.storageDirectory + name);
      }, (error) => {
        alert('gagal : ' + JSON.stringify(error));
      });
  }

}
