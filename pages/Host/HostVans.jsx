import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHostVans } from '../../api';


export default function HostVans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredVans, setFilteredVans] = useState([]);

  useEffect(() => {
    setLoading(true);
    getHostVans()
      .then((data) => {
        setVans(data);
        setFilteredVans(data); // Set filtered vans initially to all vans
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const hostVansEls = filteredVans.map((van) => (
    <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
  ));

    const handleSearch = (query) => {
        console.log('Search query:', query);
    const filtered = vans.filter(
      (van) =>
        van.name.toLowerCase().includes(query.toLowerCase()) ||
        van.price.toString().includes(query) // Assuming price is a number
    );
    setFilteredVans(filtered);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <section>
      
      <input
        type="text"
        placeholder="Search by name or price"
        onChange={(e) => handleSearch(e.target.value)}
      />
      
      <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
    </section>
  );
} 