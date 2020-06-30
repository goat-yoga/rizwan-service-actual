# Project Name

> This is the Navigation Bar component of Alo-Yoga website

## Related Projects

  - https://github.com/goat-yoga/russell-service
  - https://github.com/goat-yoga/rizwan-service-actual
  - https://github.com/goat-yoga/kimberly-service
  - https://github.com/goat-yoga/wilson_service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
1. run seeding function using `node database/seedGenerator.js`
2. run `npm install` to install all dependencies

<!-- Regarding svgr/webpack -->
- .svg files were scraped from the website
- they're html boilerplate that depict a picture.
- I imported that svg file into my react component
- that imported variable is the same thing as another react component.
tutorial below!

1. For example: I import the .svg file like the .jsx file.
  - import BackButton from './backArrow.svg';
  - import Messages from './Universal_Banner-Subcomponents/Messages.jsx';

2. implement both files like subcomponents.
  - <BackButton />
  - <Messages />

3. And Voila!! You know how to implement svg files into your react components.

- The svgr/webpack DevDependency recognizes and transpiles svg to render properly.

<!-- Regarding the menu -->
  - The user should see the menu, while hovering over either the MENU TITLE "MEN", "WOMEN", etc. or the MENU itself.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

