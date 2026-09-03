# Sloptree - better linktree
Project that just started as "How fast it would take me if I made my own Linktree styled website?"

Sloptree started as just static website wrote in HTML and CSS by Rodri. Then silver-volt4 came and rewrote the website into Svelte and Typescript to be build based on dynamic description in `.json` file, which makes it build the website without interacting with HTML, but just putting all of the important information in the mentioned `.json` file.

*Sloptree was made for small friend group "Česká Sonic Sebranka" [(visit our website)](https://sonic-sebranka.cz)*

# How to build your own website
For first run `npm install` to install everything essential for the development of website <br>
After that `npm run make-config`, which generates `data.json` in `./src/configuration` <br>
When you are done with configurating the json file, run `npm run dev`, this makes the website run locally on your computer so you can see how it actually looks

# Themes
There are even different themes featured in this whole repo. Unfortunately for now its not possible to set it dynamically. If you want to change the theme, you must change it in `./src/lib/configuration.ts` on line 3, where you put `{choose some theme}.css` instead of `style.css`