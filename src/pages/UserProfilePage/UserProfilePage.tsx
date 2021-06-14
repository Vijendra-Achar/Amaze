import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { logout } from '../../firebase/auth';

import './UserProfilePage.scss';

interface UserProfileProps extends RouteComponentProps {}

interface UserProfileState {}

class UserProfilePage extends Component<UserProfileProps, UserProfileState> {
  constructor(props: UserProfileProps) {
    super(props);
  }

  componentDidMount() {
    console.log('The router props -->', this.props);
  }

  logoutAndRedirect = () => {
    logout()
      .then(() => {
        console.log('THE CONTROL IS HERE');
        this.props.history.push('/');
      })
      .catch((error) => {
        console.error('An Error occured', error);
      });
  };

  render() {
    return (
      <div className="container__main">
        <div>Hello from the Profiles page </div>
        <button className="material-btn" onClick={this.logoutAndRedirect}>
          Sign out
        </button>
      </div>
    );
  }
}

export default withRouter(UserProfilePage);
