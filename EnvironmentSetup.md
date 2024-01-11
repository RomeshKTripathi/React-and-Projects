# Environment Variables.
    Note: different framework has different syntax to create environment variables.

## VITE
    Loaded env variables are also exposed to your client source code via import.meta.env as strings.

To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code. e.g. for the following env variables:

```.env
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```
Only VITE_SOME_KEY will be exposed as import.meta.env.VITE_SOME_KEY to your client source code, but DB_PASSWORD will not.