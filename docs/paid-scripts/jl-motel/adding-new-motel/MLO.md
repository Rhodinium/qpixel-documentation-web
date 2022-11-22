---
title: MLO
---

## Config

```lua
-- EXAMPLE FOR MLO MOTEL

Config.Motel['yourmotel'] = {
    renew = '1w',
    owner = 'yourjob', -- Job name or citizenid (qb) or player identifier (esx)
    label = "Your Shiny motel",
    mlo = true,
    rent = {
        coords = vector4(43.59, -280.55, 58.12, 10.0)
    },
    -- Use target
    Target = {
        outfit = false,
        stash = true,
        logout = true
    },
    price = 3000,
    motel = {
        ["yourshiny-motel:1"] = {
            enter = vec3(43.59, -280.55, 58.12), -- door coordinates, take it from ox_doorlock db or qb-doorlock
            -- don't touch this
            locked = true,
            owned = false,
            --
            -- CREATED WITH OX LIB ZONES
            stash = {
                name = "yourshiny-motel:stash:1",
                coords = vec3(374.6, -1792.9, 29.0),
                size = vec3(1.5, 1.4, 1.0),
                rotation = 35.0,
            },
            outfit = {
                name = "yourshiny-motel:outfit:1",
                coords = vec3(373.0, -1797.0, 29.0),
                size = vec3(1, 1, 2.5),
                rotation = 39.0,
            },
            logout = {
                name = "yourshiny-motel:1:logout",
                coords = vec3(371.4, -1798.4, 29.0),
                size = vec3(0.4, 0.35, 1.0),
                rotation = 42.0,
            }
        },
        -- add more motel here
    }
}
```

## Doorlock

Make sure your doorlock config name is same as your motel room name
if you named your room as `yourshiny-motel:1` your door name must be `yourshiny-motel:1` too

## Example:

### QB Doorlock

```lua
Config.DoorList['yourshiny-motel:1'] = {
    distance = 2,
    locked = true,
    objCoords = vec3(306.848938, -213.674500, 54.371540),
    objName = -1156992775,
    objYaw = 68.909614562988,
    fixText = false,
    pickable = true,
    audioRemote = false,
    doorType = 'door',
    doorRate = 1.0,
    --audioLock = {['file'] = 'metal-locker.ogg', ['volume'] = 0.6},
    --audioUnlock = {['file'] = 'metallic-creak.ogg', ['volume'] = 0.7},
    --autoLock = 1000,
}
```

### OX Doorlock

```sql
INSERT INTO `ox_doorlock` (`id`, `name`, `data`) VALUES
	(1, 'yourshiny-motel:1', '{"state":1,"coords":{"x":372.92047119140627,"y":-1791.2442626953126,"z":29.38381576538086},"doors":false,"maxDistance":2,"model":-1753326354,"heading":320}'),
```
