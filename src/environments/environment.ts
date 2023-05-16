// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http";

export const environment = {
    production: false,
    apiBaseUrl: 'https://localhost:7151/',
    baseUrl: 'https://localhost:7151/',
    hubConnectionURL: 'https://localhost:7151/chatsocket',
    broadcastURL: 'https://localhost:7151/chat/send',
    urlAddress: 'https://localhost:7151',
   
    urlPrefix: '',
    httpOptions: {
      headers: new HttpHeaders({}),
    },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
