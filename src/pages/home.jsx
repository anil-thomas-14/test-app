import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData, limit } from '../components/utils';
import { loadCountriesStart, loadCountriesSuccess, loadCountriesFailure, filterCountries } from '../redux/countriesSlice';
import Spinner from 'react-bootstrap/Spinner';
import SampleNavbar from '../components/navbar';
import CountryCard from '../components/country-card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Footer from '../components/footer';
import Slider from '../components/slider';

export default function Home() {

  const [activeTab, setActiveTab] = useState("all");
  const [isFetched, setIsFetched] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);

  const dispatch = useDispatch();
  const { countryData, filteredData, total, isLoading } = useSelector((state) => state.countries);

  const finalData = activeTab === "all" ? countryData.slice(0, currentPage * limit) : filteredData.slice(0, currentPage * limit);

  const handleLoadMore = () => {
    setCurrentpage(prev => prev + 1);
  }

  const handleTabChange = (selectedKey) => {
    setActiveTab(selectedKey);
    setCurrentpage(1);
  }

  const fetchData = async (activeTab) => {
    dispatch(loadCountriesStart());

    if(isFetched) {
      const filteredData = activeTab === "all" ? countryData : countryData.filter(country => country.region.toLowerCase() === activeTab);
      dispatch(filterCountries({ data: filteredData, total: filteredData.length }));
      return;
    }

    const { data, error, total } = await getApiData({ region: activeTab });

    if (error) {
      dispatch(loadCountriesFailure({ error }));
    } else {
      setIsFetched(true);
      dispatch(loadCountriesSuccess({ data, total }));
    }
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab, currentPage]);

  if (isLoading) {
    return (
      <div className="text-center my-4">
        <Spinner animation="border" role="status" />
      </div>
    )
  }

  return (
    <div className='home-container'>
      <SampleNavbar selectedKey={activeTab} handleSelect={handleTabChange} />
      <h2 className='styled-header home-header'>
        <span>WELCOME</span>
      </h2>

      <Slider finalData={finalData} />

      {finalData?.length > 0 && (
        <Row>
          {finalData.map((country) => (
            <Col key={country.name} xs={12} md={6} className="mb-3">
              <CountryCard countryData={country} />
            </Col>
          ))}
        </Row>
      )}
      {
        (total > 0 && total > currentPage * limit) &&
        <Button aria-label="Load More" className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </Button>
      }

      <Footer />
    </div>
  );
}
