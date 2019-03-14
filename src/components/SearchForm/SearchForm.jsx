import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import moment from 'moment';
import { Link } from 'react-router-dom';
import FormRadioBtn from './FormRadioBtn';
import FormDataList from './FormDataList';
import PassengersSelect from './PassengersSelect';
import Calendar from './Calendar';
import './SearchForm.less';

class SearchForm extends Component {
  state = {
    departDate: new Date(),
    returnDate: new Date(),
    from: '',
    to: '',
    adults: 1,
    children: 0,
    infant: 0,
    isOneway: true,
  };

  onChooseDepartDate = (newTime) => {
    this.setState({ departDate: newTime });
  }

  onChooseReturnDate = (newTime) => {
    this.setState({ returnDate: newTime });
  }

  onAdultsSetCount = ({ target: { value } }) => {
    const { children } = this.state;
    const { infant } = this.state;
    if (children > value) {
      this.setState({ children: +value });
    }
    if (infant > value) {
      this.setState({ infant: +value });
    }
    this.setState({ adults: +value });
  };

  onChildrenSetCount = ({ target: { value } }) => {
    const { adults } = this.state;
    if (adults >= value) {
      this.setState({ children: +value });
    }
  };

  onInfantSetCount = ({ target: { value } }) => {
    const { adults } = this.state;
    if (adults >= value) {
      this.setState({ infant: +value });
    }
  };

  onCheck = () => {
    this.setState(({ isOneway }) => ({ isOneway: !isOneway }));
  }

  onChooseCountryFrom = ({ target: { value } }) => {
    this.setState({ from: value });
  }

  onChooseCountryTo = ({ target: { value } }) => {
    this.setState({ to: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { addFormData, dispatchClearTicket } = this.props;
    const {
      departDate, returnDate, from,
      to, adults, children, infant, isOneway,
    } = this.state;

    dispatchClearTicket({});

    addFormData({
      departDate,
      returnDate,
      from,
      to,
      adults,
      children,
      infant,
      isOneway,
    });
  }

  render() {
    const {
      departDate, returnDate, adults,
      children, infant, isOneway, from, to,
    } = this.state;
    const { country } = this.props;
    return (
      <div className="search-form">
        <h3 className="search-form_title">Search Flight</h3>
        <form>
          <ul className="search-form_radio-group">
            <FormRadioBtn
              title="Oneway"
              groupName="groupRadio"
              checked
              onCheck={this.onCheck}
            />
            <FormRadioBtn
              title="Roundtrip"
              groupName="groupRadio"
              onCheck={this.onCheck}
            />
          </ul>
          <ul className="search-form_input-group">
            <FormDataList
              title="From"
              data={country}
              onCountryChoose={this.onChooseCountryFrom}
            />
            <FormDataList
              title="To"
              data={country}
              onCountryChoose={this.onChooseCountryTo}
            />
          </ul>
          <ul className="search-form_input-group search-form_input-group-calendar">
            <Calendar
              title="Depart"
              onChooseDate={this.onChooseDepartDate}
              time={departDate}
            />
            {!isOneway ? (
              <Calendar
                title="Return"
                onChooseDate={this.onChooseReturnDate}
                time={returnDate}
              />
            ) : ''}
          </ul>
          <ul className="search-form_input-group-count ">
            <PassengersSelect
              title="Adults"
              count={adults}
              min={1}
              onSetCount={this.onAdultsSetCount}
            />
            <PassengersSelect
              title="Children"
              count={children}
              max={adults}
              onSetCount={this.onChildrenSetCount}
            />
            <PassengersSelect
              title="Infant"
              count={infant}
              max={adults}
              onSetCount={this.onInfantSetCount}
            />
          </ul>
          {(from && to) ? (
            <button
              type="submit"
              onClick={this.onSubmit}
              className="search-form_submit-btn"
            >
              <Link
                to="search"
                className="search-form_submit-link"
              >
              Find Flight
              </Link>
            </button>
          ) : (
            <button
              type="submit"
              className="search-form_submit-btn"
              disabled
            >
              Find Flight
            </button>
          ) }
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  addFormData: PropTypes.func.isRequired,
  dispatchClearTicket: PropTypes.func.isRequired,
  country: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchForm;
