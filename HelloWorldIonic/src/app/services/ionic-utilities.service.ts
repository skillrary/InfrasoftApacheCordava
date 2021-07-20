import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicUtilitiesService {
  loading;
  constructor(
    public loadingController: LoadingController
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

  showToast() {

  }
}
