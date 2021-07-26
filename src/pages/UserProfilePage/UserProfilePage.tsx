import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import firebase from '../../firebase/firebase.config';

import InputButton from '../../components/InputButton/InputButton';
import FormTextInput from '../../components/FormTextInput/FormTextInput';

import { logout, changePassword } from '../../firebase/auth';

import { connect } from 'react-redux';
import { UserDocumentStructure } from '../../store/user/user.interface';

import avatarSvg from '../../assets/profile__male.png';

import './UserProfilePage.scss';

interface UserProfileProps extends RouteComponentProps {
  currentUser: firebase.firestore.DocumentData | UserDocumentStructure | null;
}

interface UserProfileState {
  newPassword: string;
  confirmNewPassword: string;
  passwordChangeError: string;
  passwordChangeSuccess: string;
  isLoading: boolean;
  defaultTimeLimit: number;
}

class UserProfilePage extends Component<UserProfileProps, UserProfileState> {
  constructor(props: UserProfileProps) {
    super(props);

    this.state = {
      newPassword: '',
      confirmNewPassword: '',
      passwordChangeError: '',
      passwordChangeSuccess: '',
      isLoading: false,
      defaultTimeLimit: 6000,
    };
  }

  componentDidMount() {}

  logoutAndRedirect = () => {
    logout()
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => {
        console.error('An Error occured while logging out', error);
      });
  };

  handlePasswordChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value } as Pick<UserProfileState, 'newPassword' | 'confirmNewPassword'>);
  };

  // Password Change handler
  handlePasswordChangeSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    this.setState({ passwordChangeError: '', passwordChangeSuccess: '' });

    this.setState({ isLoading: true });

    if (this.state.newPassword === this.state.confirmNewPassword) {
      changePassword(this.state.newPassword)
        ?.then(() => {
          this.setState({ passwordChangeSuccess: 'Password successfully changed', isLoading: false });
          this.setTimeOutForMessage(this.state.defaultTimeLimit, '');
        })
        .catch((error) => {
          this.setState({ passwordChangeError: error.message, isLoading: false });
          this.setTimeOutForMessage(this.state.defaultTimeLimit, '');
        });
    } else {
      this.setState({ passwordChangeError: 'Passwords do not match!', isLoading: false });
      this.setTimeOutForMessage(this.state.defaultTimeLimit, '');
    }
  };

  setTimeOutForMessage = (timeLimit: number, message: string) => {
    setTimeout(() => {
      this.setState({ passwordChangeError: message, passwordChangeSuccess: message });
    }, timeLimit);
  };

  render() {
    return (
      <div className="user-profile container__main">
        <div className="user-profile__left-side">
          <div className="user-profile__left-side profile-image">
            {this.props.currentUser?.photoURL && <img src={this.props.currentUser.photoURL} alt="user-profile" />}
            {!this.props.currentUser?.photoURL && <img src={avatarSvg} alt="user-profile" />}
          </div>

          <div className="user-profile__left-side user-name">{this.props.currentUser?.displayName}</div>
        </div>

        {/* Right side */}
        <div className="user-profile__right-side">
          {/* Personal information section */}
          <div className="user-profile__right-side section-heading">Personal Information</div>
          <hr />

          <div className="details">
            <div className="info">
              <div className="heading">Email</div>
              {this.props.currentUser?.email && <div className="content">{this.props.currentUser?.email}</div>}
              {!this.props.currentUser?.email && <div className="content edit">Add Email</div>}
            </div>

            <div className="info">
              <div className="heading">Phone Number</div>
              {this.props.currentUser?.phoneNumber && (
                <div className="content">{this.props.currentUser?.phoneNumber} 9009090099009</div>
              )}

              {!this.props.currentUser?.phoneNumber && <div className="content edit">Add phone number</div>}
            </div>
          </div>

          {/* Change password section */}
          {this.props.currentUser?.signInMethod === 'password' && (
            <div>
              <div className="user-profile__right-side section-heading">Change Password</div>
              <hr />

              <form onSubmit={this.handlePasswordChangeSubmit}>
                <div className="details__input">
                  <FormTextInput
                    handleChange={this.handlePasswordChangeInput}
                    label="New Password"
                    type="password"
                    value={this.state.newPassword}
                    name="newPassword"
                    required
                  />

                  <FormTextInput
                    handleChange={this.handlePasswordChangeInput}
                    label="Confirm New Password"
                    type="password"
                    value={this.state.confirmNewPassword}
                    name="confirmNewPassword"
                    required
                  />

                  <InputButton isLoading={this.state.isLoading} type="submit" label="Update" category="primary" />
                </div>
              </form>
              {this.state.passwordChangeError && (
                <div className="details-message error-message">
                  <i className="fas fa-exclamation-circle"></i> {this.state.passwordChangeError}
                </div>
              )}

              {this.state.passwordChangeSuccess && (
                <div className="details-message success-message">
                  <i className="fas fa-check-circle"></i> {this.state.passwordChangeSuccess}
                </div>
              )}
            </div>
          )}
          {/* Account Settings section */}
          <div className="user-profile__right-side section-heading">Account Settings</div>
          <hr />
          <div className="account">
            <InputButton onClickHandler={this.logoutAndRedirect} label="Sign out" category="danger" type="button" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(withRouter(UserProfilePage));
