<div align=center>
<br><br><br>

# `<Link />`
The [elemental](https://github.com/elemental-components/elemental) <Link /> component.

<br><br><br>
</div>

The `<Link />` component provides an anchor element (`<a />`) with the following props.

# Installation

```shell
yarn add @elemental/link
```

or

```shell
npm install @elemental/link --save
```

# Props

 | Prop | Type | Default | Description
 | ---- | ---- | ------- | -----------
 | `preventDefault` | `Boolean` | `false` | Automatically prevent default action an delegate the action to any defined `onClick` handler.

# Behavior

 - If `target` is set then `rel="noopener noreferrer"` will be automatically added to avoid explotation of the window API.
