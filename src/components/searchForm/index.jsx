import React, { Component } from 'react';
// import moment from 'moment';
import DatePicker from 'react-datepicker';
import FormRadioBtn from './formRadioBtn';
import FormDataList from './formDataList';
import PassengersSelect from './passengersSelect';
import Calendar from './calendar';

import 'react-datepicker/dist/react-datepicker.css';
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
  constructor(props) {
    super(props);
    this.state = {
      departTime: new Date(),
      returnTime: new Date(),
    };
  }

  // handleDepartDate = (newTime) => {
  //   this.setState({ departTime: newTime });
  // }

  render() {
    const { departTime, returnTime } = this.state;
    return (
      <div className="search-form">
        <h3 className="search-form_title">Search Flight</h3>
        <form>
          <ul className="search-form_radio-group">
            <FormRadioBtn title="Oneway" groupName="groupRadio" checked />
            <FormRadioBtn title="Roundtrip" groupName="groupRadio" />
          </ul>
          <ul className="search-form_input-group">
            <FormDataList title="From" data={land} />
            <FormDataList title="To" data={land} />
          </ul>
          <ul className="search-form_input-group search-form_input-group-calendar">
            <Calendar title="Depart" fnc={newTime => this.setState({ departTime: newTime })} time={departTime} />
            {/* <li className="search-form_input-group-select search-form_input-group-select-calendar">
              <p htmlFor="Depart" className="search-form_input-group-select_label">Depart</p>
              <DatePicker
                selected={departTime}
                onChange={newTime => this.setState({ departTime: newTime })}
                className="search-form_input-group-calendar-input"
              />
            </li> */}
            <li className="search-form_input-group-select search-form_input-group-select-calendar">
              <p htmlFor="Return" className="search-form_input-group-select_label">Return</p>
              <DatePicker
                selected={returnTime}
                onChange={newTime => this.setState({ returnTime: newTime })}
                className="search-form_input-group-calendar-input"
              />
            </li>
          </ul>
          <ul className="search-form_input-group-count ">
            <PassengersSelect title="Adults" count={5} min={1} />
            <PassengersSelect title="Children" count={5} />
            <PassengersSelect title="Infant" count={5} />
          </ul>
          <button type="submit" className="search-form_submit-btn">Find Flight</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
