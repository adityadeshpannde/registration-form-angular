import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private userService: UserService,  private router: Router) {}

  
  ngOnInit() {
    this.user = this.userService.getUserData();
  }

  onEditProfile() {
    this.router.navigate(['/registration-form'], { state: { user: this.user } });
  }

  onEditPhoto() {
    // Trigger file input click to allow user to upload a new photo
    document.getElementById('photoUploadInput').click();
  }

  onPhotoUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width === 310 && img.height === 325) {
          this.user.photo = img.src;
          this.userService.setUserData(this.user);
        } else {
          alert('Photo must be 310x325 pixels.');
        }
      };
    }
  }
}
