import {Page} from 'ionic-framework/ionic';
import {AuthService} from '../../services/auth/auth';

@Page({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {
  
  // We need to inject AuthService so that we can
  // use it in the view
  constructor(private auth: AuthService) {}
}
