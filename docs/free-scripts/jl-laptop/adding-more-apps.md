---
id: adding-more-apps
title: Adding More Apps
---

:::caution
You must have at least basic knowledge of coding and knowledge about html/CSS if you want to add more apps to the laptop, its not an easy task to do 🙂
:::

#### Requirements:

- [NodeJS](https://nodejs.org/en/) (LTS)
- NPM (Included with NodeJS) / [Yarn ](https://yarnpkg.com/)/ [PNPM](https://pnpm.io/) (PNPM is recommended)
- Basic knowledge about [svelte](https://youtu.be/rv3Yq-B8qp4)

### Installing the dependencies

Go to `svelte-source`, open your terminal there and type:

`pnpm install` or `npm install` or `yarn install` it depends on what package manager you use

### Running the source

To start web development mode, simply use `pnpm dev --open` or `npm run dev` or `yarn run dev` it will automatically open a browser and you will see the laptop in your browser

<figure><img src="https://media.discordapp.net/attachments/921376697792733184/1019555187867799562/unknown.png" alt=""/><figcaption></figcaption></figure>

### Adding Apps

You can add more app by using the Apps component.

#### Step 1.

Create new svelte file inside `svelte-source/src/components/apps`

#### Step 2.

Import the Apps component inside your new svelte file

```html
<script lang="ts">
  import Apps from "@components/shared/Apps.svelte";
</script>
```

The `Apps` component need to has this data

```javascript
    title: string; // App Title, Will be shown in the top left app
    color: string; // Top window color in the app
    background?: string; //App Background color
    blurstrength?: number; // Blur Strength (backdrop-filter)
    blur?: boolean; // Enable or disable blur
```

<figure><img src="../../.gitbook/assets/unknown.png" alt=""/><figcaption><p>explanation</p></figcaption></figure>

You can define the data like below

```markup
<script lang="ts">
  import Apps from "@components/shared/Apps.svelte";
  let topData = {
    title: "New App",
    background: "#1c1b22",
    blur: true,
    blurstrength: 15,
    color: "#1b1b1b",
  };
</script>

<Apps topdata={topData} appname="newapp">
  <!-- You can create your app inside here -->
</Apps>
```

#### Step 3.

Go to `utils/initDumyData.ts` and add your app inside `InitDumyAppData` function on `data` variable

```typescript
    {
      name: "newapp",
      icon: "cut", // the icon can be fontawesome or ionicons, or an image name, put your image inside public/images/apps
      text: "New App", // App Icon Name
      color: "#fff", // The Icon color
      background: "#1c1b22", // The Icon background color
      isopen: false, // Don't touch this
      useimage: false, // If you use image, make sure to enable this
    },
```

And after that you will see your nice looking new app icon there

<figure><img src="https://media.discordapp.net/attachments/980050095208796172/1019546379581931530/unknown.png" alt=""/><figcaption></figcaption></figure>

#### Step 4.

After that you must register your app on `Desktop.svelte`&#x20;

first, you have to import your NewApp Component into Desktop.svelte, simply import that by doing

`import NewApp from "@apps/NewApp.svelte"`

after that, search for registeredApp variable, and add your app there.

```typescript title="Desktop.svelte"
// Register your app component here
let registeredApp: any = {
  boosting: Boosting,
  setting: Setting,
  bennys: BennyShop,
  boss: Management,
  darkweb: DarkWeb,
  //Your new app below
  newapp: NewApp,
};
```

Save it, and after that you should be able to open your app when clicking the icon

#### Step 5.

Don't forget to add the app on `config.lua` inside `Config.Apps` table:

```lua title="config.lua"
Config.Apps = {
    ['newapp'] = {
        app = 'newapp',
        name = "New App",
        icon = "cut",
        useimage = false,
        color = '#fff',
        background = "#1c1b22",
        bannedJobs = {}, -- Job that can't use this app
        job = {}, -- Job that are allowed to use this app
        gang = {},  -- it can be boolean or a table {'ballas'}
        item = { "vpn" }, -- Item that the player must have to be able to show the app
        default = false -- If it true it will be added by default
    }
}
```

### Using fetchNui

To send a POST request to your backend / your lua side, you can use `fetchNui` function, you can import it from `@utils/eventHandler.ts`

Example usage:

```html
<script lang="ts">
  import Apps from "@components/shared/Apps.svelte";
  import { fetchNui } from "@utils/eventHandler";
  let topData = {
    title: "New App",
    background: "#1c1b22",
    blur: true,
    blurstrength: 15,
    color: "#1b1b1b",
  };

  // EXAMPLE USAGE OF fetchNui
  fetchNui("gitgud", {
    text: "Damn I'm handsome",
  }).then((resp) => {
    console.log(resp);
  });
</script>

<Apps topdata="{topData}" appname="newapp">
  <!-- You can create your app inside here -->
</Apps>
```

```lua title="yourfile.lua"
RegisterNUICallback("gitgud", function (data, cb)
    print(data.text) -- It will print "Damn I'm handsome"
    cb("No you ugly") -- After that it will send back this string
end)
```

### Build the svelte source

After you satisfy with your new app you can build your app and use it in game

To build the svelte source simply run this command on your terminal

`pnpm build` or `npm run build` or `yarn run build`

Restart your server, and your pretty good looking, badass unique app will be there :nerd:
