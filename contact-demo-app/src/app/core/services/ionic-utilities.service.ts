import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicUtilitiesService {
  loading;
  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  async showLoader() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }

  async hideLoader() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
  }

  async presentAlertConfirm(callback) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete this record?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            callback(false);
          }
        }, {
          text: 'Okay',
          handler: () => {
            callback(true);
          }
        }
      ]
    });

    await alert.present();
  }


}
