import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { submitTicket } from '../actions';

class Ticket extends Component {
  static propTypes = {
    submitTicket: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.submitTicket(data);
  }

  render() {
    return (
      <div className="ticket">
        <h2 className="ticket__title">Write your Zendesk ticket</h2>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, showError, successResponse, errorResponse }) => ({
  isLoading,
  showError,
  response: showError ? errorResponse : successResponse,
});

export default connect(mapStateToProps, { submitTicket })(Ticket);