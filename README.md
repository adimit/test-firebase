# test-firebase

A test case for including firebase in a web extension.

## Chrome works

Load this up in Chrome:

* load `chrome://extensions`
* check 'Developer mode'
* click 'load unpacked extension'
* choose folder with this git repo
* Click on "inspect views: background page" (an inspector window with console pops up)

When you click on the button, you should see the firebase object, and the logged
in test user object in the console.

## Firefox doesn't

Easiest is to do

* `npm install`
* `npm run test`

If you already have `web-ext` installed globally, you can just go
`web-ext run --verbose` from the root of this repo.

This opens up firefox. You can inspect the views by navigating to
`about:debugging` and clicking "Debug."

With Firefox 55.0.2 (Linux 64bit), the following errors occur prior to clicking the button (merely by loading the addon):


```
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 52: SyntaxError: test for equality (==) mistyped as assignment (=)?
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 57: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 57: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 82: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 101: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 106: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 107: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 125: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 177: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 272: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 274: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 396: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 412: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 471: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 475: SyntaxError: test for equality (==) mistyped as assignment (=)?
JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 477: SyntaxError: test for equality (==) mistyped as assignment (=)?
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 28: ReferenceError: reference to undefined property "name_"
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 285: ReferenceError: reference to undefined property "a"
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 28: ReferenceError: reference to undefined property "Auth"

```

And then after clicking the button:

```
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 279: ReferenceError: reference to undefined property "currentUser"
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 59: ReferenceError: reference to undefined property "closure_lm_434254"
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 54: ReferenceError: reference to undefined property "storage"
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 176: ReferenceError: reference to undefined property "Va"
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 176: ReferenceError: reference to undefined property "Oe"
[firefox/index.js][debug] Firefox stderr: JavaScript strict warning: moz-extension://ec7f4b77-3e2d-48c6-8e27-bb75d93980d1/firebase.js, line 91: ReferenceError: reference to undefined property "readystatechange"

```

Additionally, the console shows a blocked CORS request to `www.googleapis.com`
(note this domain is whitelisted in the CPS directive in `manifest.json`) and a
Firebase error `auth/network-request-failed`.
