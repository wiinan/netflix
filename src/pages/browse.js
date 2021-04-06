import React from 'react';
import BrowseContainer from '../containers/browseContainer';
import {useContent} from '../hooks';
import {SelectionFilter} from '../utils';

export default function Browse(){
    const {series} = useContent('series'); 
    const {films} = useContent('films');
    const slides = SelectionFilter({series,films});
    
    
    return <BrowseContainer slides={slides} />
    
}