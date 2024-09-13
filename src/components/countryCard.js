import React from "react";
import CountryDetail from "./countryDetail";

const CountryCard = (props) => {
  return (
    <div className="min-w-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 m-5 dark:border-gray-700">
      <img className="rounded-t-lg" src={props.img} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Population: {props.population}
        </p>
        <CountryDetail
          name={props.name}
          capital={props.capital}
          region={props.region}
          subregion={props.subregion}
          languages={props.languages}
        />
      </div>
    </div>
  );
};

export default CountryCard;
