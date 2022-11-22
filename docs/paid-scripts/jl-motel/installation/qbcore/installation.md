---
sidebar_positon: 2
title: Installation
---

**Go to your** `qb-core/shared/items.lua` **and add this snippet**

```javascript title=qb-core/shared/items.lua
 ['motel_key']					 = {['name'] = 'motel_key',						['label'] = 'Motel Key',				['weight'] = 0,			['type'] = 'item',		['image'] = 'motel_key.png',			['unique'] = true,		['useable'] = true,		['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Motel key'},
```

**Go to your** `qb-core/server/player.lua`**and find this**

```lua
    PlayerData.metadata['inside'] = PlayerData.metadata['inside'] or {
        house = nil,
        apartment = {
            apartmentType = nil,
            apartmentId = nil,
        },
    }
```

**Replace that with this**

```lua
    PlayerData.metadata['inside'] = PlayerData.metadata['inside'] or {
        house = nil,
        apartment = {
            apartmentType = nil,
            apartmentId = nil,
        },
        motel = {
            motel = nil,
            room = nil
        }
    }
```
