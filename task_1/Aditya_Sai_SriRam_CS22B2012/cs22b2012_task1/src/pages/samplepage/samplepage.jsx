import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

function SamplePage({ data }) {
    const no_of_images = 3;
    const [displayed_images, setDisplayedImages] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const updateDisplayedImages = () => {
            const sIndex = Math.min(startIndex, data.length - no_of_images);
            const endIndex = Math.min(sIndex + no_of_images, data.length);
            const newDisplayedImages = data.slice(sIndex, endIndex);
            setDisplayedImages(newDisplayedImages);
        };

        updateDisplayedImages();
    }, [startIndex, data, no_of_images]);

    useEffect(() => {
        const preLoadImages = () => {
            const startIndexClamped = Math.min(startIndex, data.length - no_of_images);
            const endIndex = Math.min(startIndexClamped + no_of_images, data.length);
            const imagesToPreload = data.slice(startIndexClamped, endIndex);

            imagesToPreload.forEach(image => {
                let img = new Image();
                img.src = image.src;
                img.alt = image.alt;
            });
        };
        const updateDisplayedImages = () => {
            const sIndex = Math.min(startIndex, data.length - no_of_images);
            const endIndex = Math.min(sIndex + no_of_images, data.length);
            const newDisplayedImages = data.slice(sIndex, endIndex);
            setDisplayedImages(newDisplayedImages);
        };

        updateDisplayedImages();
        preLoadImages();

    }, [startIndex, data, no_of_images]);

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, data.length - no_of_images));
    };

    return (
        <main className='h-full flex flex-col items-center justify-center'>
            <h1 className='text-center text-4xl m-2'>Image Slider</h1>
            <div className='flex flex-row gap-5 items-center justify-center mt-40'>
                <button onClick={handlePrev} disabled={startIndex === 0} className={`border border-white rounded-full p-2 ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-600/80'}`}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                    </svg>
                </button>
                <div className='grid grid-flow-col auto-cols-max gap-4'>
                    {displayed_images.map((image, index) => (
                        <Card key = {index} src = {image.src} alt = {image.alt}/>
                    ))}
                </div>
                <button onClick={handleNext} disabled={startIndex >= data.length - no_of_images} className={`border border-white rounded-full p-2 ${startIndex >= data.length - no_of_images ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-600/80'}`}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                    </svg>
                </button>
            </div>
        </main>
    );
}

export default SamplePage;
