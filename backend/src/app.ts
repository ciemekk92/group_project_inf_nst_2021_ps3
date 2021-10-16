import express from "express";

const app = express();
const port = 8080;

app.get( "/", ( req, res ) => {
    res.send( "EMA" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );