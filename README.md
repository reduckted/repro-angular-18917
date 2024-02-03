Reproduction for https://github.com/angular/angular/issues/18917

The component has two animation stations - "on" and "off".

When the state is "on", the background color is `red`, and when the state is "off", the background color is `cornflowerblue`.

The transition between the states is 3 seconds.

When the animation from "off" to "on" _completes_, the height of the component is reduced via a host binding. When the animation from "on" to "off" _starts_, the height of the component is restored via a host binding. In other words, the height is only reduced when the background color is exactly `red`.

Clicking the button will toggle the state. While the animation from "off" to "on" is in progress, toggling the state will throw a `ExpressionChangedAfterItHasBeenCheckedError`.

While the animation from "on" to "off" is in progress, toggling the state will _not_ throw an error.
