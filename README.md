# Action JS Hello World

This action prints "Hello World!" with env,secret,with,etc provided by Workflow of Github Action.

This code is referenced [hello-world-javascript-action] and "[Creating a JavaScript action](https://help.github.com/en/articles/creating-a-javascript-action)" in the GitHub Help documentation.

## Inputs

### `hello-text`

**Required** The name of the person to greet. Default `"Hello"`.


### env `HELLO_ENV`

Default `"Hello"`

### secret `HELLO_SECRET`




## Outputs

The expected output results are as follows.

### `textResponse`

```
Hello World!
```

### `arrayResponse`

```
[Hello,World!]
```

### `envResponse`

```
Hello World!
```

### `secretResponse`

```
Hello World!
```

If secret key of `HELLO_SECRET` is not set, it returns as follows. 

```
World!
```

## Example usage

```yaml
uses: actions/action-js-hello-world@master
with:
  hello-text: 'Hello'
```

---

[action-js-hello-world]: https://github.com/negabaro/action-js-hello-world
[hello-world-javascript-action]: https://github.com/actions/hello-world-javascript-action
https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action