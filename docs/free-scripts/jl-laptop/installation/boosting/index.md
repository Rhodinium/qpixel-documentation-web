---
id: boosting
title: Boosting
---

Headover to your `qb-core/shared/vehicles` and add this to all your following vehicles

:::danger
You must add minimum 2 cars per tier to make it work
:::

```lua
["tier"] = "D" -- Can either be D, C, B, A, A+, S, S+
```

Example:

```lua title=qb-core/shared/vehicles.lua
QBShared.Vehicles = {

	['asbo'] = {
		['name'] = 'Asbo',
		['brand'] = 'Maxwell',
		['model'] = 'asbo',
		['price'] = 4000,
		['category'] = 'compacts',
		['hash'] = `asbo`,
		['shop'] = 'pdm',
        ["tier"] = "D", -- Can either be D, C, B, A, A+, S, S+

	},

    -- Your other cars
}
```

After that go to your `qb-core/server/player.lua` and add this metadata

```lua
PlayerData.metadata['carboostrep'] = PlayerData.metadata['carboostrep'] or 0
```
