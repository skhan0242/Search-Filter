import React from 'react';
import PropTypes from 'prop-types';

class ContactDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {contactData} =this.props
        return (
            <div>
                {/* {
                    contactData.map((contact) =>( */}
                    <div className="contactWrapper fLeft">
                        <div className="imageWrapper fLeft">
                            <p className='imageIcon'><img src={contactData.image} alt="images" /></p>
                        </div>
                        <div className="detailsWrapper fLeft">
                            <p>{contactData.name}</p>
                            <p>{contactData.phoneNumber}</p>
                        </div>
                    </div>
                    {/* )) */}
                {/* } */}
            </div>
        );
    }
}

ContactDetails.propTypes = {};

export default ContactDetails;
