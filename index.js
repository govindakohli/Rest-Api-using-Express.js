const express = require("express");
const app = express();
const Port = 3000;
const userdate = require("./MOCK_DATA.json");

app.get("/", (req, res) => {
  return res.end("welcome to my page");
});
app.get("api/userdate", (req, res) => {
  return res.json(userdate);
});

// print all users names
app.get("/usersnames", (req, res) => {
  const html = `<ul>
    ${userdate.map((user) => {
        return(` <li>${user.first_name}</li>`)}).join("")}
    </ul>`;
  return res.send(html);
});

//dynamic value changed  // print user name by dynamic value
app.get("/userdate/:id", (req, res) => {
    // id = req.params.id;  // by khan sir 
    // return res.end(`this is my user number ${id}`);// by khan sir 


    id = Number(req.params.id) ;
    const user = userdate.find((user)=>user.id===id)
    
    return res.json(user);
  });

app.listen(Port, () => console.log(`Server getting starting at ${Port}`));
