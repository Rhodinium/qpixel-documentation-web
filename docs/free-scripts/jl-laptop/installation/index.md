---
id: installation
title: Installation
sidebar_position: 1
---

:::danger
THE LAPTOP IS ONLY TESTED ON 1920x1080 RESOLUTION OTHER RESOLUTION MAY CAUSE SOME UI ISSUE
:::

## General

Go to your `qb-core/server/player.lua` and add this metadata

```lua title="qb-core/server/player.lua"
PlayerData.metadata['laptop'] = PlayerData.metadata['laptop'] or {
    background = 'default',
    darkfont = false,
}
```

## Dependencies:

- [PS UI](https://github.com/Project-Sloth/ps-ui)
- [PS Dispatch](https://github.com/Project-Sloth/ps-dispatch) Only for the boosting alert
- Original [qb-phone](https://github.com/qbcore-framework/qb-phone) or [Renewed qb-phone edit](https://github.com/Renewed-Scripts/qb-phone)

<tr/>
