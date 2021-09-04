const express = require( 'express' );
const ejs = require( 'ejs' );
const app = express();

app.use( express.static( "public" ) );
app.set( 'view engine', 'ejs' );
app.use( express.urlencoded( {
    extended: true
} ) );

app.get( '/home', ( req, res ) =>
{
    res.render( 'home' )
} );
app.get('/home/',(req,res)=>{
    res.render('home-login')
});
app.listen( process.env.PORT || 3000, function ()
{
    console.log( "Express server listening on port %d in %s mode", this.address().port, app.settings.env );
} );