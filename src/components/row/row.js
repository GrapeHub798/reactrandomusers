import React from 'react';

class AppRow extends React.Component {
    state = {
        user: this.props.user
    };

    componentWillReceiveProps(nextProps) {
        // Any time props.email changes, update state.
        if (nextProps.user !== this.props.user) {
            this.setState({
                user: nextProps.user
            });
        }
    }

    render() {
        const user = this.state.user;
        return (<tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.street}</td>
            <td>{user.city}</td>
            <td>{user.state}</td>
            <td>{user.phone}</td>
        </tr>)
    };
}

export default AppRow;
