# angular store example

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-medx2s)

https://stackblitz.com/github/anthonykuong/angular11

You can run any public repo on Github by providing the username + repo name like so:

stackblitz.com/github/{GH_USERNAME}/{REPO_NAME}

And you can also optionally specify a branch, tag, or commit:
.../github/{GH_USERNAME}/{REPO_NAME}/tree/{TAG|BRANCH|COMMIT}

Automatically stays in sync with your repo#


## Generate Deployables.

First install the angular-cli-ghpages globally:
$ npm install -g angular-cli-ghpages:
Now use the Angular CLI with the --base-href flag to build your project and set the correct base href location::
$ ng build --prod --base-href "" :
Then it’s as simple as running angular-cli-ghpages. You can use the ngh shorthand::
$ ngh 
And done! Your app will now be hosted at
https://anthonykuong.github.io/angular11/

#Commands to deploy npm run deploy
ngh
