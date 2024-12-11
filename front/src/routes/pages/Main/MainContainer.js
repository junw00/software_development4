import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainPresenter from './MainPresenter';

const MainContainer = () => {
    const [entries, setEntries] = useState([]);
    const userId = localStorage.getItem('userId'); // 로컬 스토리지에서 사용자 ID 가져오기

    const fetchEntries = async () => {
        try {
            const response = await axios.get('http://localhost:8000/users/entries', {
                params: { userId }
            });
            setEntries(response.data);
        } catch (error) {
            console.error('Error fetching entries:', error);
        }
    };

    const addEntry = async (entry) => {
        try {
            await axios.post('http://localhost:8000/users/entries', { ...entry, userId });
            fetchEntries(); // Refresh the entries after adding
        } catch (error) {
            console.error('Error adding entry:', error);
        }
    };
    // 항목 수정 함수
    const updateEntry = (index, updatedEntry) => {
        const updatedEntries = entries.map((entry, i) =>
            i === index ? updatedEntry : entry
        );
        setEntries(updatedEntries);
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    return <MainPresenter entries={entries} addEntry={addEntry} updateEntry={updateEntry}/>;
};

export default MainContainer;