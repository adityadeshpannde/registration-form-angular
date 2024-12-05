import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  addressType: string = 'home';
  interests: string[] = [];
  photo: File | null = null;
  photoError: string = '';
  showForm: boolean = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  onPhotoUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width === 310 && img.height === 325) {
          this.photo = file;
          this.photoError = '';
        } else {
          this.photoError = 'Photo must be 310x325 pixels.';
        }
      };
    }
  }

  onAddressChange(event: any) {
    this.addressType = event.target.value;
  }

  addInterest(event: any) {
    const interest = event.target.value.trim();
    if (interest && !this.interests.includes(interest)) {
      this.interests.push(interest);
      event.target.value = '';
    }
  }

  removeInterest(interest: string) {
    this.interests = this.interests.filter(i => i !== interest);
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.photo) {
      const formData = {
        ...form.value,
        photo: this.photo,
        interests: this.interests
      };
      this.userService.setUserData(formData);
      this.showForm = false;
      // Navigate to profile screen
    }
  }
}
