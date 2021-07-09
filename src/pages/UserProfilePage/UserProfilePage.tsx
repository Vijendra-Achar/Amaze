import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import firebase from '../../firebase/firebase.config';

import InputButton from '../../components/InputButton/InputButton';

import { logout } from '../../firebase/auth';

import { connect } from 'react-redux';
import { UserDocumentStructure } from '../../store/user/user.interface';

import avatarSvg from '../../assets/profile__male.png';

import './UserProfilePage.scss';

interface UserProfileProps extends RouteComponentProps {
  currentUser: firebase.firestore.DocumentData | UserDocumentStructure | null;
}

interface UserProfileState {}

class UserProfilePage extends Component<UserProfileProps, UserProfileState> {
  constructor(props: UserProfileProps) {
    super(props);
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
        <div className="user-profile__right-side">
          <div className="user-profile__right-side section-heading">Personal information</div>
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
          <InputButton onClickHandler={this.logoutAndRedirect} label="Sign out" category="danger" type="button" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(withRouter(UserProfilePage));
