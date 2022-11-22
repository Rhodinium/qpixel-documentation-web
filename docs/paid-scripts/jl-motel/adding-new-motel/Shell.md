---
title: Shell
---

## Config

- owner: `string` - You can put your identifier here or job name
- label: `string`
- rent: `table` - Where the guy stand
- price: `number` - Your motel price, you can also put this inside your motel room to make it have different price
- shell: `number` - Shell number, inside `spawnshell.lua/SpawnShell function`
- motel: `table`
  - enter : `vector4` enter coords
  - label : `string` room label
  - locked : `boolean` always set this to true
  - owned : `boolean` always set this to false
  - price? : `number` `optional`

```lua
Config.Motel["newmotel"] = {
    owner = "newmotel",
    label = "New Motel",
    rent = {
        coords = vector4(570.02, -1746.43, 29.22, 247.45)
    },
    price = 1200,
    shell = 3,
    motel = {
        ['newmotel:1'] = {
            enter = vector4(566.26, -1777.95, 29.35, 343.83),
            label = "New Motel 1",
            locked = true,
            owned = false,
            price = 500
        },
        -- you can add more room below here with the same format as above
    }
}

```

## Add new shell

Create new function inside client/spawnshell.lua

:::tip

You can use [loaf offset finder](https://github.com/loaf-scripts/loaf_offsetfinder) to get your shell offset

:::

```lua
function SpawnNewShell(coords)
    local POIOffsets = {
        -- you get all the coords from loaf offset finder.
        exit = json.decode('{"x": -0.43, "y": -2.51, "z": 1.0, "h": 271.29}'),
        stash = json.decode('{"x": 1.427551, "y": -3.175781, "z": -0.773796, "h": 184.584869}'),
        logout = json.decode('{"x": -1.108032, "y": 1.074829, "z":  -0.340126, "h": 95.320656}'),
        outfit = json.decode('{"x": 1.332947, "y": 2.519531, "z": -1.546425, "h": 359.401703}')
    }
    local ZoneData = {
        --[[
            vec3(x, y, z) is same as (width, height, minZ + maxZ)
        ]]
        exit = {
            size = vec3(1.5, 1.5, 2.0),
        },
        stash = {
            size = vec3(2.0, 1.5, 1)
        },
        logout = {
            size = vec3(1.0, 1.0, 1.0)
        },
        outfit = {
            size = vec3(1.0, 1.0, 2.0),
        }
    }
    DoScreenFadeOut(500)
    while not IsScreenFadedOut() do
        Wait(10)
    end
    lib.requestModel(joaat('your_shell_name')) -- example: shell_trailer
    local model = CreateObject(joaat('your_shell_name'), coords.x, coords.y, coords.z, false, false, false)
    FreezeEntityPosition(model, true)
    Teleport(coords.x + POIOffsets.exit.x, coords.y + POIOffsets.exit.y, coords.z + POIOffsets.exit.z, POIOffsets.exit.h)
    return {
        model, POIOffsets, ZoneData
    }
end
```

After that go to SpawnShell function and add your new shell spawn function there

```lua
function SpawnShell(coords, shell)
    if shell == 1 then
        return SpawnDefaultShell(coords)
    elseif shell == 2 then
        return SpawnModernMotel(coords)
    elseif shell == 3 then
    -- your new shell here
        return SpawnNewShell(coords)
    else
        return SpawnDefaultShell(coords)
    end
end
```
