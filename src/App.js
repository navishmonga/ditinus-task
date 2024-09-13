import "./App.css";
import SearchBar from "./components/searchBar";
import CountryCard from "./components/countryCard";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const countryData = useSelector((state) => state.country);
  return (
    <div className="App">
      <ToastContainer />
      <SearchBar />
      <div className="flex flex-wrap max-w-[1200px] mx-auto">
        {countryData?.map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              capital={country.capital}
              region={country.region}
              subregion={country.subregion}
              languages={country.languages}
              img={country.flags.png}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
