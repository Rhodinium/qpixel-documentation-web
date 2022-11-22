---
title: 😶‍🌫️ Customize
---

Here you can know about what you can customize or change on `client/custom.lua`

## Phone Mail

```lua
function SendPhoneMail(sender, subject, message)
	TriggerServerEvent('qb-phone:server:sendNewMail', {
		sender = sender,
		subject = subject,
		message = message
	})
end
```

## Notification

- text: `string`
- type: `"default" | "error" | "success"`

```lua
function Notification(text, type)
	if display then
		TriggerEvent('jl-motel:notifyUI', text, type)
	else
		lib.notify({
			description = text,
			type = type
		})
	end
end
```

## Outfit

- id: `string`

```lua
function OpenClothing(id)
	TriggerEvent('qb-clothing:client:openOutfitMenu')
end
```

## Open Inventory / Stash

- id: `string`

```lua
function OpenInventory(id)
	if GetResourceState('ox_inventory') == "started" then
		exports['ox_inventory']:openInventory('stash', id)
	else
		TriggerServerEvent("inventory:server:OpenInventory", "stash", id, Config.Stash)
		TriggerEvent("inventory:client:SetCurrentStash", id)
	end
end
```

## Drawtext

Showing the drawtext:

```lua
function ShowDrawtext(text)
	lib.showTextUI(text, {
		position = "left-center",
	})
end
```

Hiding the drawtext

```lua
function HideDrawtext()
	lib.hideTextUI()
end
```

## Minigame

This minigame will show when you start raiding motel room

```lua
function MiniGame()
	local success = lib.skillCheck('medium')
	return success
end
```

## Blip

```lua
function CreateBlip(coords, name, sprite, colour)
	sprite = sprite or 475
	colour = colour or 5
	local blip = AddBlipForCoord(coords)
	SetBlipSprite(blip, sprite)
	SetBlipScale(blip, 0.6)
	SetBlipColour(blip, colour)
	SetBlipDisplay(blip, 4)
	SetBlipAsShortRange(blip, true)
	BeginTextCommandSetBlipName("STRING")
	AddTextComponentString(name)
	EndTextCommandSetBlipName(blip)
	return blip
end
```
