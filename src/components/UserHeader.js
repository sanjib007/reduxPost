import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fatchUser } from '../actions';
class UserHeader extends Component {

    componentDidMount(){
        this.props.fatchUser(this.props.userId);
    }

    render() {
        const {user} = this.props;
        console.log(user);
        if(!user){
            return null;
        }
        return (
            <div>
                {user.name}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user : state.user.find(auser => auser.id === ownProps.userId) }
}


export default connect(mapStateToProps, { fatchUser })(UserHeader);