import React from "react";

export const FormCurrentWeather = props => (
  <form className="search" onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="City" />
    <button type="onSubmit">Search</button>
  </form>
)

export const FormDaysPerHoursWeather = props => (
  <form className="search" onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="City" />
    <button type="onSubmit">Search</button>
  </form>
)
