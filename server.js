const express = require('express'); //commonJS (syntax)

//we can't use import without implemmenting babel/typescript
//React uses ES2015 modules hence import syntax

const app = express(); //app object intialized

//we can send HTML in this as well
// app.get('/', (req, res) => res.send('Hello World'));
// app.get('/', (req, res) => res.sendFile(****));
app.get('/', (req, res) => res.json({ msg: 'Welcome to contact keeper API' }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
