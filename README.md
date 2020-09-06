# [Personal Website](https://www.meldanor.me) of Kilian Gärtner

This is my private website for my profession. It was build based on HTML5 Boilerplate, is a Parcel project using
PostHTML to composite the HTML. The CSS is compiled from SCSS/SASS and the JS is from Typescript 3.X.

[Website](https://www.meldanor.me)

## Development

1. Clone the project
2. `npm i` to download dependencies
3. `npm run dev` for a local development server.

## Build and Deployment

The target is a small nginx container containing the compiled web files.

Run the following to build the project:

    docker build .

 Run the following to deploy it (obviously you need access to the server):

    npm run deploy

## License

MIT

## Acknowledgments

The used icons are partially from fontawesome.com/.

Inspiration for the website is from https://themes.gohugo.io/theme/toha/ , a template for Hugo.
