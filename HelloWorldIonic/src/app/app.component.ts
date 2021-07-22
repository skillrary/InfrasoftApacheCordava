import { Component } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private androidPermissions: AndroidPermissions,
    private platform: Platform
  ) {
    this.platform.ready()
    .then((_) => {
      this.androidPermissions
      .requestPermissions(
        [
          this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
          this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        ]
      )
      .then((res) => {
      });
    });
  }
}
