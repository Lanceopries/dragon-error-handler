# What is this? 

Get simple error handler for your http requests.
This will return HttpResponse, with status 500 (Internal Server Error).
You also can use it with Express Js.

# Installation

`npm i dragon-error-handler --save`

Then...

```

import { errorHandler } from 'dragon-error-handler';

catch(e) {
    errorHandler(res, e);
}

```
Or...

`const errorHandler = require("dragon-error-handler");`

```

catch(e) {
    errorHandler(res, e);
}


```

## Options

Error Handler should to get 2 params:

* *res* - _HttpResponse_ (The HttpResponse parameter from your function)
* *e* - _string_ (The string with your custom error message, or with message from your catch property)