import React, { useState, useEffect } from 'react';
import { getExhibits } from '../data/apiClient';

export default function Hero() {
    const [exhibits, setExhibits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadExhibits = async () => {
        try {
            const data = await getExhibits();
            setExhibits(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };
        loadExhibits();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

      return (
        <div>
        <h1>Museum Exhibits</h1>
        <ul>
            {exhibits.map((exhibit) => (
            <li key={exhibit.id}>
                <h2>{exhibit.title}</h2>
                <p>{exhibit.description}</p>
            </li>
            ))}
        </ul>
        </div>
    );

}