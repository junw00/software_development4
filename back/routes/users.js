var express = require('express');
var router = express.Router();


let users = [
    { id: 'user1', password: 'pass1', entries: [] },
    { id: 'user2', password: 'pass2', entries: [] }
];


router.post('/login', (req, res) => {
    const { id, password } = req.body;
    const user = users.find(u => u.id === id && u.password === password);

    if (user) {
        res.status(200).json({ message: '로그인 성공', userId: user.id });
    } else {
        res.status(401).json({ message: '잘못된 자격 증명' });
    }
});


router.post('/signup', (req, res) => {
    const { id, password } = req.body;


    const existingUser = users.find(u => u.id === id);
    if (existingUser) {
        return res.status(409).json({ message: '이미 존재하는 사용자 ID입니다.' });
    }


    users.push({ id, password, entries: [] });
    res.status(201).json({ message: '회원가입 성공' });
});


router.post('/entries', (req, res) => {
    const { userId, amount, type, content, date } = req.body;

    const user = users.find(u => u.id === userId);
    if (user) {
        user.entries.push({ amount, type, content, date });
        res.status(201).json({ message: '항목 추가 성공' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});


router.put('/entries/:index', (req, res) => {
    const { userId } = req.body;
    const { index } = req.params;
    const { amount, type, content, date } = req.body;

    const user = users.find(u => u.id === userId);
    if (user) {
        if (user.entries[index]) {

            user.entries[index] = { amount, type, content, date };
            res.status(200).json({ message: '항목 수정 성공' });
        } else {
            res.status(404).json({ message: '항목을 찾을 수 없습니다.' });
        }
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});


router.get('/entries', (req, res) => {
    const { userId } = req.query; 

    const user = users.find(u => u.id === userId);
    if (user) {
        res.status(200).json(user.entries);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;
