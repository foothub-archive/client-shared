                                                       
          _____           _     _   _       _          
         |  ___|__   ___ | |_| | | | |_   _| |__       
         | |_ / _ \ / _ \| __| | |_| | | | | '_ \      
         |  _| (_) | (_) | |_| |  _  | |_| | |_) |     
         |_|  \___/ \___/ \__| |_| |_|\__,_|_.__/      
                                                       

# client-shared

Repository with the src code that is shared between the web and mobile clients


## Usage example

```javascript
// @ main.js

import Vue from 'vue';
import './plugins/vuex'; // registers vuex
import { authApi, coreApi } from './services'; 
import store from './client-shared/src/vuex-store';
import registerInterceptors from './client-shared/src/interceptors';

registerInterceptors([authApi, coreApi]);

// initialize authentication store module

new Vue({
  store,
})


```
