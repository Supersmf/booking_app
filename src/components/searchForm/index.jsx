import React, { Component } from 'react';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import 'rc-calendar/assets/index.css';
import moment from 'moment';
import './searchForm.less';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departTime: moment(),
      returnTime: moment(),
    };
  }

  render() {
    const calendar = (<Calendar />);
    const { departTime, returnTime } = this.state;
    return (
      <div className="search-form">
        <h3 className="search-form_title">Search Flight</h3>
        <form>
          <ul className="search-form_radio-group">
            <li className="search-form_radio-group_btn">
              <label htmlFor="Oneway">
                <input type="radio" id="Oneway" name="gropRadio" checked onChange={() => ''} />
                Oneway
              </label>
            </li>
            <li className="search-form_radio-group_btn">
              <label htmlFor="Roundtrip">
                <input type="radio" id="Roundtrip" name="gropRadio" />
              Roundtrip
              </label>
            </li>
          </ul>
          <ul className="search-form_input-group">
            <li className="search-form_input-group-select">
              <p htmlFor="countryFrom" className="search-form_input-group-select_label">From</p>
              <input
                id="countryFrom"
                type="text"
                name="countryFrom"
                list="fromCity"
                className="search-form_input-group-select_select"
              />
              <datalist id="fromCity">
                <option value="Australia">AU</option>
                <option value="Canada">CA</option>
                <option value="USA">US</option>
              </datalist>
            </li>
            <li className="search-form_input-group-select">
              <p htmlFor="countryTo" className="search-form_input-group-select_label">To</p>
              <input
                id="countryTo"
                name="countryTo"
                list="toCity"
                className="search-form_input-group-select_select"
              />
              <datalist id="toCity">
                <option value="Australia">AU</option>
                <option value="Canada">CA</option>
                <option value="USA">US</option>
              </datalist>
            </li>
          </ul>
          <ul className="search-form_input-group search-form_input-group-calendar">
            <li className="search-form_input-group-select search-form_input-group-select-calendar">
              <p htmlFor="Depart" className="search-form_input-group-select_label">Depart</p>
              <DatePicker
                animation="slide-up"
                value={departTime}
                disabled={false}
                calendar={calendar}
                onChange={newTime => this.setState({ departTime: newTime })}
              >
                {
                      ({ value }) => (
                        <input
                          value={value ? value.format('YYYY-MM-DD') : ''}
                          onChange={() => ''}
                          className="search-form_input-group-calendar-input"
                        />
                      )
                  }
              </DatePicker>
            </li>
            <li className="search-form_input-group-select search-form_input-group-select-calendar">
              <p htmlFor="Return" className="search-form_input-group-select_label">Return</p>
              <DatePicker
                name="Return"
                animation="slide-up"
                value={returnTime}
                disabled={false}
                calendar={calendar}
                onChange={newTime => this.setState({ returnTime: newTime })}
              >
                {
                      ({ value }) => (
                        <input
                          value={value ? value.format('YYYY-MM-DD') : ''}
                          onChange={() => ''}
                          className="search-form_input-group-calendar-input"
                        />
                      )
                  }
              </DatePicker>
            </li>
          </ul>
          <ul className="search-form_input-group-count ">
            <li className="search-form_input-group-count_count">
              <p className="search-form_input-group-select_label">Adults</p>
              <select id="Adults" name="Adults" className="search-form_input-group-count_select">
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </li>
            <li className="search-form_input-group-count_count">
              <p htmlFor="Children" className="search-form_input-group-select_label">Children</p>
              <select id="Children" name="Children" className="search-form_input-group-count_select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </li>
            <li className="search-form_input-group-count_count">
              <p htmlFor="Infant" className="search-form_input-group-select_label">Infant</p>
              <select id="Infant" name="Infant" className="search-form_input-group-count_select">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </li>
          </ul>
          <button type="submit" className="search-form_submit-btn">Find Flight</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
