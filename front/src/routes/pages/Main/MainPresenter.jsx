import React, { useState } from 'react';
import { Header } from '../../../components';

const MainPresenter = ({ entries, addEntry, updateEntry }) => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); 


    const handleAddOrEditEntry = () => {
        if (amount && content && date) {
            if (editingIndex !== null) {

                updateEntry(editingIndex, { amount: parseFloat(amount), type, content, date });
                setEditingIndex(null); // 수정 상태 초기화
            } else {

                addEntry({ amount: parseFloat(amount), type, content, date });
            }
            setAmount('');
            setContent('');
            setDate('');
        }
    };


    const startEditing = (index) => {
        const entry = entries[index];
        setAmount(entry.amount);
        setType(entry.type);
        setContent(entry.content);
        setDate(entry.date);
        setEditingIndex(index); 
    };

    // 총 수입과 지출 계산
    const totalIncome = entries.filter(entry => entry.type === 'income').reduce((acc, entry) => acc + entry.amount, 0);
    const totalExpense = entries.filter(entry => entry.type === 'expense').reduce((acc, entry) => acc + entry.amount, 0);

    return (
        <div className='main-container'>
            <Header />
            <div className='summary'>
                <h3>총 수입: {totalIncome}</h3>
                <h3>총 지출: {totalExpense}</h3>
            </div>
            <div className='entry-form'>
                <input type='number' placeholder='금액' value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value='income'>수입</option>
                    <option value='expense'>지출</option>
                </select>
                <input type='text' placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)} />
                <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                <button onClick={handleAddOrEditEntry}>{editingIndex !== null ? '수정' : '추가'}</button>
            </div>
            <ul className='entries-list'>
                {entries.map((entry, index) => (
                    <li key={index} style={{ backgroundColor: entry.type === 'income' ? '#d4edda' : '#f8d7da' }}>
                        날짜: {entry.date}, 금액: {entry.amount}, 내용: {entry.content}, 유형: {entry.type === 'income' ? '수입' : '지출'}
                        <button onClick={() => startEditing(index)}>수정</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainPresenter;
