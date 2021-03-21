import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus,updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 15559;
        }
       this.props.getUserProfile(userId)
       this.props.getUserStatus(userId)
    };

    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        );
    }
}

let mapStateToProps = (props) => ({
    profile: props.profilePage.profile,
    status: props.profilePage.status,

})


export default compose(
    connect(mapStateToProps, { getUserProfile,getUserStatus,updateStatus }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer) ;