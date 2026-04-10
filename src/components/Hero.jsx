import React, { useState, useEffect, useRef } from 'react';
import { getExhibits } from '../data/apiClient';
import ExhibitCard from './ExhibitCard';

export default function Hero() {
    const [exhibits, setExhibits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const loadExhibits = async () => {
            try {
                const data = await getExhibits();
                const exhibitsData = data.map(exhibit => ({
                    ...exhibit,
                    image: `${window.location.origin}/bonjour/${exhibit.image}`
                }));
                console.log('EXHIBITS DATA IS',exhibitsData);
                setExhibits(exhibitsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadExhibits();
    }, []);

    useEffect(() => {
        if (exhibits.length > 0) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % exhibits.length);
            }, 6000);
            return () => clearInterval(intervalRef.current);
        }
    }, [exhibits.length]);

    
    const goLeft = () => {
        setCurrentIndex((prev) => (prev - 1 + exhibits.length) % exhibits.length);
    };
    const goRight = () => {
        setCurrentIndex((prev) => (prev + 1) % exhibits.length);
    };


    const getVisibleItems = () => {
        if (exhibits.length === 0) return [];
        const left2Index = (currentIndex - 2 + exhibits.length) % exhibits.length;
        const left1Index = (currentIndex - 1 + exhibits.length) % exhibits.length;
        const right1Index = (currentIndex + 1) % exhibits.length;
        const right2Index = (currentIndex + 2) % exhibits.length;
        return [
            exhibits[left2Index],
            exhibits[left1Index],
            exhibits[currentIndex],
            exhibits[right1Index],
            exhibits[right2Index]
        ];
    };

    if (loading) return <div className="text-center py-10">Loading exhibits...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;
    if (exhibits.length === 0) return <div className="text-center py-10">No exhibits found.</div>;

    return (
        <div className="relative w-full overflow-hidden py-10">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Museum Exhibits
            </h1>
            <div className="flex justify-center items-center w-full px-4">
                <div className="flex gap-4 w-full justify-center">
                    {getVisibleItems().map((exhibit, i) => (
                        <div
                            key={exhibit.id}
                            className={`transition-all duration-500 ease-in-out flex-shrink-0 ${i === 2 ? 'z-20 scale-100 w-1/3' : 'z-10 scale-75 w-1/5 opacity-70 grayscale hover:grayscale-0'}`}
                        >
                            <ExhibitCard
                                exhibit={exhibit}
                                isCenter={i === 2}
                                onClick={() => setCurrentIndex((currentIndex - 2 + i + exhibits.length) % exhibits.length)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={goLeft}
                className="absolute left-4 p-2 bg-gray-200 rounded-full -translate-y-1/2 top-1/2 text-xl font-bold text-gray-700 hover:bg-gray-300"
            >
                ←
            </button>
            <button
                onClick={goRight}
                className="absolute right-4 p-2 bg-gray-200 rounded-full -translate-y-1/2 top-1/2 text-xl font-bold text-gray-700 hover:bg-gray-300"
            >
                →
            </button>
        </div>
    );
}