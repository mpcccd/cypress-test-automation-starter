# Setup (via YARN)

## Installing Node
1. Install NVM (node version manager)
    https://github.com/coreybutler/nvm-windows/releases
    Download the nvm-setup.zip
    
2. Run Command line as Administrator
3. Install the LTS version of node using NVM
```
nvm install lts
```

4. Install NodeJS
```
nvm use <version name ex. 16.13.1>
```

## Install Package Manager YARN
```
npm install --global yarn
```

## Create new project (or import)
```
cd /your/proj/path
yarn set version latest
yarn init
```

## Declare & Install project's dependencies
```
yarn add cypress --dev
yarn add cypress-xpath --dev
yarn add oracledb --dev
```

## Start test server and open up dashboard(and initialize cypress folder)
```
$> npx cypress open
```


