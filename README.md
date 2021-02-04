# Bug when testing portal-vue with vue-test-utils

A unit test which is mounting a component with a `portal-target` pollutes the state of a following unit test.
Although, each unit test uses its own `localVue` instance.

Both unit tests mount a component with a `portal-target` with name `"berlin"`.
The second test prints the following warning:

```
[portal-vue]: Target berlin already exists
```
