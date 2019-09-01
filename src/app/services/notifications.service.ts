import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }

  successNotification(message: string, title: string) {
    this.toastr.success(message, title);
  }

  errorNotification(message: string, title: string){
    this.toastr.error(message, title);
  }
}
