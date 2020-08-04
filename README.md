# ristorante_con_fusion
<p>This project consists of two folders (<i>"con-fusion"</i> with project files and <i>"json-server"</i> as a database on a local server); <br>
To run this project locally follow these steps:</p>
<ol>
<li> Download/clone the repository into an empty folder;
<li> In console go to the folder "json-server" and execute the following command to run the local server: json-server --watch db.json -p 3001 -d 2000
<li> Open another console window (or just do it in console of your IDE): go to the folder "con-fusion" and run there following commands (wait for each command to be completed before starting the next one):
<ul>
<li> npm i
<li> npm audit fix
<li> npm start
</ul> 
<li> Enjoy!
</ol>
<p> Currently it's only possible to run this React app only on the local json-server to fetch the pictures and read/write to the database aka db.json </p>
<p> If you find a way to deploy it on a normal hosting/VPS, please let me know in comments! I already tried it with Heroku, but it seems that some dependencies are outdated. I didn't find any good method to run it online and would appreciate a working solution for deployment. </p>
