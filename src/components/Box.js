import React, { useEffect, useMemo, useRef, useState } from "react";
// import DatePicker from "react-datepicker";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./Box.css";
const Box = () => {
  const [startDate, setDate] = useState(new Date());
  const memoStartDate = useMemo(() => startDate, []);
  const [showCalender, setShowCalender] = useState(false);
  // const DatePickerRef = useRef();
  let values = { food: 33, shopping: 33, movies: 33 };
  let total = values.food + values.shopping + values.movies;
  const calenderinput = useRef();
  const handlecalenderinput = () => {
    // alert("open calender");
    setShowCalender(!showCalender);
    // DatePickerRef.current.setFocus(true);
  };
  useEffect(() => {}, []);
  return (
    <div className="d-flex w-100 justify-center align-center">
      <div className="container br-24">
        <header className="d-flex w-100 justify-between ">
          <div>Your total spend</div>
          <div
            className="d-flex justify-end position-relative"
            onClick={() => handlecalenderinput()}
          >
            this month
            <div className="w-fit h-fit">
              {showCalender && (
                <div
                  className="w-auto h-auto position-absolute"
                  onClick={() => setShowCalender(false)}
                >
                  <Calendar onChange={setDate} value={startDate} />
                </div>
              )}

              {/* <DatePicker
                className="wrapperClassName"
                selected={startDate}
                onChange={(date) => setDate(date)}
                ref={DatePickerRef}
                dateFormat="MM/yyyy"
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
              /> */}
            </div>
            {/* this month */}
            {/*  */}
            <div className="cont-svg">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 29 29"
                //   xml:space="preserve"
              >
                <path
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="m20.5 11.5-6 6-6-6"
                />
              </svg>
            </div>
          </div>
        </header>
        <section className=" middle-section d-inline ">
          <div className="d-flex align-center">
            SAR
            <h2 className="d-flex pl-10">
              {values.food + values.shopping + values.movies}
            </h2>
          </div>
        </section>
        <section className="colored-strip d-flex br-24">
          <div
            className="yellow-cont h-10 brl-8"
            style={{ width: `${(values.food / total) * 100}%` }}
          ></div>
          <div
            className="green-cont h-10"
            style={{ width: `${(values.shopping / total) * 100}%` }}
          ></div>
          <div
            className="red-cont h-10 brr-8"
            style={{ width: `${(values.movies / total) * 100}%` }}
          ></div>
        </section>
        <footer className="d-flex">
          <div className="dot-topic d-flex">
            <span
              className="dot"
              style={{ "background-color": "#ffb800" }}
            ></span>
            Food
          </div>
          <div className="d-flex dot-topic">
            <span
              className="dot"
              style={{ "background-color": "#1ba493" }}
            ></span>
            Shopping
          </div>
          <div className="d-flex dot-topic">
            <span
              className="dot"
              style={{ "background-color": "#e44816" }}
            ></span>
            Movies
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Box;
