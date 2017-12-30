<div align=center>
<br><br><br>

# `<Link />`

<br><br><br>
</div>

The `<Link />` component provides an anchor element (`<a />`) with the following props.

## Props

 - `preventDefault` - Automatically prevent default action an delegate the action to any defined `onClick` handler.

## Behavior

 - If `target` is set then `rel="noopener noreferrer"` will be automatically added to avoid explotation of the window API.
