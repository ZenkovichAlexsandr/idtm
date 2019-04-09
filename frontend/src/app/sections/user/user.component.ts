import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user.model';
import {SpinnerService} from '../../services/spinner.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  form: FormGroup;

  id: FormControl;
  username: FormControl;
  name: FormControl;
  lastName: FormControl;
  title: FormControl;
  address: FormControl;

  isEdit = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private userService: UserService,
              private spinner: SpinnerService,
              private notification: NotificationService) {
  }

  ngOnInit() {
    const userKey = 'user';
    this.user = this.route.snapshot.data[userKey] || new User();

    this.buildForm();
  }

  buildForm() {
    this.id = new FormControl(this.user.id);
    this.username = new FormControl(this.user.username, [Validators.required]);
    this.name = new FormControl(this.user.name, [Validators.required]);
    this.lastName = new FormControl(this.user.lastName, [Validators.required]);
    this.title = new FormControl(this.user.title);
    this.address = new FormControl(this.user.address);

    this.createForm();
  }

  onSave() {
    if (!this.form.dirty) {
      this.isEdit = false;
      return;
    }

    if (this.form.valid) {
      this.performUpdate();
    }
  }

  onCancel() {
    this.isEdit = false;
    this.buildForm();
  }

  private performUpdate() {
    this.spinner.show();
    const formValue = Object.assign({}, this.form.value);
    this.userService.update(this.id.value, formValue)
      .subscribe(
        response => {
          this.user = response;
          this.buildForm();
          this.isEdit = false;
          this.notification.info('User was updated sucsessfully');
          this.spinner.hide();
        },
        () => {
          this.notification.error('There are some problems! Please try update user later.');
          this.spinner.hide();
        }
      );
  }

  private createForm() {
    this.form = this.formBuilder.group({
      id: this.id,
      username: this.username,
      name: this.name,
      lastName: this.lastName,
      title: this.title,
      address: this.address
    });
  }

}
