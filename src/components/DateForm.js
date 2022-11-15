import React, { useState, useEffect } from 'react';

export default function DateForm() {

  //get today value
  let today = localStorage.getItem('date') === null ? new Date() : new Date(localStorage.getItem('date'));

  const [day, setDay] = useState(String(today.getDate()).padStart(2, '0'));
  const [month, setMonth] = useState(String(today.getMonth() + 1).padStart(2, '0'));
  const [year, setYear] = useState(today.getFullYear());
  const [result, setResult] = useState(difference(new Date(), new Date(year +'/'+ month+ '/'+ day)));

  function difference(date1, date2) {
    const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const day = 1000*60*60*24;
    console.log(date2);
    return(date2utc - date1utc)/day
  }

  useEffect(()=>{
    localStorage.setItem('date', String(new Date(year +'/'+ month+ '/'+ day)))
    setResult(difference(new Date(), new Date(year +'/'+ month+ '/'+ day)))
  },[day, month, year])


  return (
    <>
      <div id ="container">
        <span className="item item1">
        <label>Month</label><br/>
        <select id="month" name="month" value = {month} onChange={(e)=>setMonth(e.target.value)}>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>
        </span>
        <span className="item item2">
        <label>Day</label><br/>
        <select id="day" name="day" value = {day} onChange = {(e)=>setDay(e.target.value)}>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
        </select>
        </span>
        <span className="item item3">
        <label>Year</label><br/>
        <input type="text" value={year} onChange={(e)=>setYear(e.target.value)}></input>
        </span>
        <div className="item6">
        <h2>
          {month}/{day}/{year} is {result} days from now.
        </h2>
        </div>
    </div>
    </>
  );
}