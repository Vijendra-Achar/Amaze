import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import InputButton from '../../components/InputButton/InputButton';

import { logout } from '../../firebase/auth';

import './UserProfilePage.scss';

interface UserProfileProps extends RouteComponentProps {}

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
      <div className="container__main">
        <div>Hello from the Profiles page </div>
        {/* <button className="material-btn" onClick={this.logoutAndRedirect}>
          Sign out
        </button> */}

        <InputButton onClickHandler={this.logoutAndRedirect} label="Sign out" category="danger" type="button" />
      </div>
    );
  }
}

export default withRouter(UserProfilePage);
