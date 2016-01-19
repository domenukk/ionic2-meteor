Welcome to the world of tomorrow [insert meme here]

With this lib (`npm install --save ionic2-meteor`) you can use Meteor Databases in your Ionic2 App.

### Usage ###
Just `import MeteorApp from ionic2-meteor` and then replace `@App` with `@MeteorApp`.
It will do all the necessary bootstrapping. There is no need to use bootsrap anymore.
Now you should be able to use everything from the `angular2-meteor-client` package. 

To actually have a Meteor server running, create a meteor app somewhere, for example inside your ionic folder with 
`meteor create` and then, from inside of the folder, do all the things you want.
I'm currently working on an example.
