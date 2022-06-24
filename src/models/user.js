class User {
    firstName = '';
    lastName = '';
    email = '';
    street = '';
    city = '';
    state = ''
    phone = '';

    constructor(jsonInfo) {
        if (!jsonInfo){
            return;
        }
        this.firstName = jsonInfo.name && jsonInfo.name.first;
        this.lastName = jsonInfo.name && jsonInfo.name.last;
        this.email = jsonInfo.email;
        const streetName = jsonInfo.location && jsonInfo.location.street && jsonInfo.location.street && jsonInfo.location.street.name;
        const streetNumber = jsonInfo.location && jsonInfo.location.street && jsonInfo.location.street && jsonInfo.location.street.number;
        this.street = streetNumber && streetName ? `${streetNumber} ${streetName};` : '';
        this.city = jsonInfo.location && jsonInfo.location && jsonInfo.location.city;
        this.state = jsonInfo.location && jsonInfo.location && jsonInfo.location.state;
        this.phone = jsonInfo.phone
    }
}

export default User;
