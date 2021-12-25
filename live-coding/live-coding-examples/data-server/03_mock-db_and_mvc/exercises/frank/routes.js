import express from 'express';
import { JSONFile, Low } from 'lowdb';

const router = express.Router();
let limit=1000;

// Datenhaltung
//const adapter = new JSONFile('db.json');
const adapter = new JSONFile('./data/messages.json');
const db = new Low(adapter);

await db.read();
db.data ||= { messages: [] };

// ========= Limit setzen (falls angegeben)
const setLimit = (obj) =>
{
    if(obj.hasOwnProperty('limit'))
         limit = parseInt(obj.limit, 10);
    else
         limit = 1000;     
}

// ========= init - db.json neu erstellen 
// =========        & mit 1.Datensatz initialisieren
router.post('/clear', async (req, res) => 
{
    db.data = {messages: []};
	db.data.messages.push(req.body);
	await db.write();
	res.status("200").send("new database created\n");
});
// ========= query?feld=inhalt<&feld=inhalt><&limit=max>
router.get('/query/', async (req, res) => 
{
    setLimit(req.query);
    const querys = Object.entries(req.query).filter(value => (value[0] !== 'limit') &&
                                                              value[0] !== 'offset');
    const found=db.data.messages.filter((value) => 
                                 {
                                  //console.log('value=',value);
                                  for(let i = 0; i < querys.length && limit >= 0; i++)
                                  {
                                    //console.log(value[querys[i][0]],'==',querys[i][1],'=',value[querys[i][0]].includes(querys[i][1].replaceAll('"','')));
                                    if(!value[querys[i][0]].includes(querys[i][1].replaceAll('"','')))
                                      return false;  
                                  }
                                  if(--limit < 0)
                                    return false;
                                  return true;   
                                 });
    console.log("Found:\n",found);
    res.status("200").send(found);
})
// ========= update:id
router.put('/update', async (req, res) => 
{
    if(req.query.hasOwnProperty('id')) 
    {
       let no=db.data.messages.findIndex(value => (value.id === req.query.id));
       if(no => 0)
       {
          if(req.body.hasOwnProperty('title'))
             db.data.messages[no].title=req.body.title;
          if(req.body.hasOwnProperty('text'))   
             db.data.messages[no].text=req.body.text;
          await db.write();
          res.status("200").send(`record with id=${req.query.id} updated`);
       }
    }
    else
        res.status("200").send(`Unknown ID!`);  
});    
// ========= delete:id
router.delete('/delete', async (req, res) => 
{
    if(req.query.hasOwnProperty('id')) 
    {
        let temp=db.data.messages.filter(value => (value.id !== req.query.id));
        db.data.messages=temp;
	    await db.write();
        res.status("200").send(`<h1>record with id=${req.query.id} deleted</h1>`);
    }
    else
        res.status("200").send(`<h1 style="color: red">Unknown ID!</h1>`)  
});
// ========= create
router.post('/create', async (req, res) => 
{
    let newID = 0;
    for( let i=0; i < db.data.messages.length; i++)
    {
       let id = parseInt(db.data.messages[i].id, 10);
       if(newID <= id)
         newID = id;
    }
    newID = "" + ++newID;

	db.data.messages.push({id:newID, title:req.body.title, text:req.body.text,});
	await db.write();
	res.status("200").send(`<h1>new record with id=${newID} written</h1>`);
});


// http://localhost:3000/list?from=startid(&limit=maxanzahl)
router.get('/list/', async (req, res) => 
{
    setLimit(req.query)
    if(req.query.hasOwnProperty('from')) 
    {
        res.status("200").send(
                         db.data.messages.
                         filter(value => (value.id >= req.query.from) && (limit-- > 0)));
    }
})

// http://localhost:3000/list/all
router.get('/list/all', async (req, res) => 
{
      res.status("200").send(db.data);
})

// http://localhost:3000/list/:id
router.get('/list/:id', async (req, res) => 
{
    const id=req.params.id
    const data = db.data.messages.find(value => value.id === id);
    if(data)
      res.status.send(data);
    else
      res.status("200").send(`<h1 style="color: red">Entry ${id} not found!</h1>`)  
})

export default router;