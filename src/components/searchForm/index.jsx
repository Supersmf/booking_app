import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSearchData } from '../../actions/actionCreator';
import FormRadioBtn from './formRadioBtn';
import FormDataList from './formDataList';
import PassengersSelect from './passengersSelect';
import Calendar from './calendar';
import './searchForm.less';

const land = [
  {
    id: 1,
    country: 'Australia',
    code: 'AU',
  },
  {
    id: 2,
    country: 'Canada',
    code: 'CA',
  },
  {
    id: 3,
    country: 'USA',
    code: 'US',
  },
];

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
    const { addFormData } = this.props;
    addFormData(this.state);
  }

  render() {
    const {
      departData, returnData, adults, children, infant,
    } = this.state;
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
              data={land}
              onCountryChoose={this.onChooseCountryFrom}
            />
            <FormDataList
              title="To"
              data={land}
              onCountryChoose={this.onChooseCountryTo}
            />
          </ul>
          <ul className="search-form_input-group search-form_input-group-calendar">
            <Calendar
              title="Depart"
              onChooseDate={this.onChooseDepartDate}
              time={departData}
            />
            <Calendar
              title="Return"
              onChooseDate={this.onChooseReturnDate}
              time={returnData}
            />
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
          <button
            type="submit"
            onClick={this.onSubmit}
            className="search-form_submit-btn"
          >
          Find Flight
          </button>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  addFormData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  form: state.searchData,
});

const mapDispatchToProps = {
  addFormData: addSearchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
