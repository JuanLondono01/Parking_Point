import React from 'react';
import './search.css'

interface SearchProps{
    value: string,
    onSearch: (e:React.ChangeEvent<HTMLInputElement>) => void
};


export const SearchBar: React.FC<SearchProps> = ({value, onSearch}) => {


    return (
        <>
        <input type="text" placeholder='Buscar' value={value} onChange={onSearch}/>
        </>
    )
};
