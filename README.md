# Action JS Hello World

This action prints "Hello World!" or the name + "World!" of a person to greet to the log. To learn how this action was built, 

see "[Creating a JavaScript action](https://help.github.com/en/articles/creating-a-javascript-action)" in the GitHub Help documentation.

## Inputs

### `hello-text`

**Required** The name of the person to greet. Default `"Hello"`.


### env `HELLO_ENV`

Default `"Hello"`

### secret `HELLO_SECRET`




## Outputs

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

if secrets not valid 

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


[Link]: https://github.com/actions/hello-world-javascript-action
https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action