# Diceware API

Diceware API is an Azure Function App in JavaScript, which generates diceware
passwords based on the EFF wordlist.

# Live Demo

- https://dicewareapi.azurewebsites.net/api/generate
- https://dicewareapi.azurewebsites.net/api/generate?length=8&sep=%5E

# Development

This package can be uploaded to Azure as a ZIP deployment.  The conveniant
way to do this is to install Visual Studio Code and install the Azure 
Functions extension.  Download and open this project folder in Visual 
Studio Code.  A Local Project (dicewareapi) will appear in the Azure 
Functions extension.  With this Local Project selected, choose Deploy 
to Function App and follow the prompts.
    
# Author

[Cameron King](http://cameronking.me)

# License

This software is released under the ISC license.

See `LICENSE` file for details.
