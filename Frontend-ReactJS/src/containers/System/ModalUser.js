import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }


    render() {
        console.log('check child props', this.props);
        console.log('check child open modal', this.props.isOpen);
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className='modal-user-container'
                size='lg'
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text'></input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password'></input>
                        </div>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input type='password'></input>
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input type='password'></input>
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input type='password'></input>
                        </div>
                    </div>

                    
                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color="primary" onClick={() => { this.toggle() }}>
                        Save changes
                    </Button>{' '}
                    <Button className='px-3' color="secondary" onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
