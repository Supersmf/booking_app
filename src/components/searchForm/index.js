import React, { Component } from "react";
import Calendar from "rc-calendar";
import DatePicker from "rc-calendar/lib/Picker";
import 'rc-calendar/assets/index.css';
import moment from 'moment';
import "./searchForm.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departTime: moment(),
      returnTime: moment()
    }
  }

  render() {
    const calendar = (<Calendar/>); 
    return (
      <div className="search-form">
        <h3 className="search-form_title">Search Flight</h3>
        <form>
          <ul className="search-form_radio-group">
            <li className="search-form_radio-group_btn">
              <input type="radio" id="Oneway" name="gropRadio" checked onChange = {() => ''}/>
              <label htmlFor="Oneway">Oneway</label>
            </li>
            <li className="search-form_radio-group_btn">
              <input type="radio" id="Roundtrip" name="gropRadio" />
              <label htmlFor="Roundtrip">Roundtrip</label>
            </li>
          </ul>
          <ul className="search-form_input-group">
            <li className="search-form_input-group-select">
              <label htmlFor="countryFrom" className="search-form_input-group-select_label">From</label>
              <input id="countryFrom" type="text" name="countryFrom" list="fromCity" 
                    className="search-form_input-group-select_select"/>
              <datalist id="fromCity">
                <option value="Australia">AU</option>
                <option value="Canada">CA</option>
                <option value="USA">US</option>
              </datalist>
            </li>
            <li className="search-form_input-group-select">
              <label htmlFor="countryTo" className="search-form_input-group-select_label">To</label>
              <input id="countryTo" name="countryTo" list="toCity" 
                      className="search-form_input-group-select_select"/>
              <datalist id="toCity">
                <option value="Australia">AU</option>
                <option value="Canada">CA</option>
                <option value="USA">US</option>
              </datalist>
            </li>
          </ul>
          <ul className="search-form_input-group search-form_input-group-calendar">
            <li className="search-form_input-group-select search-form_input-group-select-calendar">
              <label htmlFor="countryFrom" className="search-form_input-group-select_label">Depart</label>
              <DatePicker animation="slide-up" value={this.state.departTime} disabled={false}
                    calendar={calendar} onChange={newTime => this.setState({departTime: newTime})}
                >{
                    ({value}) => {
                        return (
                            <input value={value ? value.format('YYYY-MM-DD') : ''} onChange= {() => ''} 
                                    className="search-form_input-group-calendar-input"/>
                        )
                    }
                }</DatePicker>
            </li>
            <li className="search-form_input-group-select search-form_input-group-select-calendar">
              <label htmlFor="countryTo" className="search-form_input-group-select_label">Return</label>
              <DatePicker animation="slide-up" value={this.state.returnTime} disabled={false}
                    calendar={calendar} onChange={newTime => this.setState({returnTime: newTime})}
                >{
                    ({value}) => {
                        return (
                            <input value={value ? value.format('YYYY-MM-DD') : ''} onChange= {() => ''} 
                                    className="search-form_input-group-calendar-input"/>
                        )
                    }
                }</DatePicker>
            </li>
          </ul>
          <ul className="search-form_input-group-count ">
            <li className="search-form_input-group-count_count">
              <label htmlFor="Adults" className="search-form_input-group-select_label">Adults</label>
              <select id="Adults" name="Adults" className="search-form_input-group-count_select">
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </li>
            <li className="search-form_input-group-count_count">
              <label htmlFor="Children" className="search-form_input-group-select_label">Children</label>
              <select id="Children" name="Children" className="search-form_input-group-count_select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </li>
            <li className="search-form_input-group-count_count">
              <label htmlFor="Infant" className="search-form_input-group-select_label">Infant</label>
              <select id="Infant" name="Infant" className="search-form_input-group-count_select">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </li>
          </ul>
          <button className="search-form_submit-btn">Find Flight</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
