import React, { useState } from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState('');
    const [images, setImages] = useState("")
    const [title, setTitle] = useState("")
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(data => {
                setSerachResult(data.data.Actors)
                    return data
            })
            .then(data => {
                setImages(data.data.Poster)
                return data
            }).then(data => setTitle(data.data.Title))
    };


    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                   <span>{title}</span>
                   <div> {serachResult} </div>
                    <img src={images} alt=""/>
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;