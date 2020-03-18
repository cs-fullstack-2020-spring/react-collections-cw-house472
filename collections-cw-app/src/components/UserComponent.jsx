import React, {Component} from 'react'
class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        // console.log(`in post ${this.props.postData.name}`)
        return (
            <div>
                <p>Post ID: {this.props.postData.id}</p>
                <p>Name: {this.props.postData.name}</p>
                <p>Username: {this.props.postData.username}</p>
                <p>Email: {this.props.postData.email}</p>
                <p>Street Address: {this.props.postData.address.street}</p>
                <p>Suite: {this.props.postData.address.suite}</p>
                <p>City: {this.props.postData.address.city}</p>
                <p>Zip code: {this.props.postData.address.zipcode}</p>
                <p>GEO: {this.props.postData.address.geo.lat}</p>
                <p>LNG: {this.props.postData.address.geo.lng}</p>
                <p>Phone: {this.props.postData.address.phone}</p>
                <p>Website: {this.props.postData.website}</p>
                <p>Company: {this.props.postData.company.name}</p>
                <p>Catchphrase: {this.props.postData.company.catchPhrase}</p>
                <p>{this.props.postData.company.bs}</p>




            </div>
          );
    }
}
 
export default UserComponent;