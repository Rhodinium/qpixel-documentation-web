---
id: snippets-and-other
title: Snippets And Others
---

## Item Snippet

```lua title=qb-core/shared/items.lua
['trackerdisabler'] = { ['name'] = 'trackerdisabler', ['label'] = 'Tracker Disabler', ['weight'] = 100, ['type'] = 'item', ['image'] = 'trackerdisabler.png', ['unique'] = true, ['useable'] = true,['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'What is this?' },

['vpn'] = { ['name'] = 'vpn', ['label'] = 'VPN', ['weight'] = 100, ['type'] = 'item', ['image'] = 'vpn.png',['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = "Hmm", }
```

## FAQ

- **Q:** I can't close my laptop, the cursor stay there <tr/>
  **A:** Make sure the folder name is `jl-laptop` not `jl-laptop-main` or other
