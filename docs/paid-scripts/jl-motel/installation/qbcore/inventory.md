---
title: Setting up inventory
---

### qb-inventory / lj-inventory

**Go to your** `qb-inventory/html/js/app.js` **or** `lj-inventory/html/js/app.js` **and add this snippet**

```javascript
else if (itemData.name == "motel_key") {
      $(".item-info-title").html(
        "<p>" + itemData.label + " " + itemData.info.room.label + "</p>"
      );
      $(".item-info-description").html(
        "<p>" +
          itemData.description +
          "</p><p>" +
          "Motel: " +
          itemData.info.motel.label +
          "</p><p>" +
          "Room: " +
          itemData.info.room.label +
          "</p><p>" +
          "Owner: " +
          itemData.info.firstname +
          " " +
          itemData.info.lastname +
          "</p>" +
          "<p>" +
          "CID: " +
          itemData.info.owner +
          "</p>"
      );
    }
```

For example

```javascript
   else if (itemData.name == "weaponlicense") {
      $(".item-info-title").html("<p>" + itemData.label + "</p>");
      $(".item-info-description").html(
        "<p><strong>First Name: </strong><span>" +
          itemData.info.firstname +
          "</span></p><p><strong>Last Name: </strong><span>" +
          itemData.info.lastname +
          "</span></p><p><strong>Birth Date: </strong><span>" +
          itemData.info.birthdate +
          "</span></p>"
      );
    }
    // I PUT THE SNIPPET HERE
  else if (itemData.name == "motel_key") {
      $(".item-info-title").html(
        "<p>" + itemData.label + " " + itemData.info.room.label + "</p>"
      );
      $(".item-info-description").html(
        "<p>" +
          itemData.description +
          "</p><p>" +
          "Motel: " +
          itemData.info.motel.label +
          "</p><p>" +
          "Room: " +
          itemData.info.room.label +
          "</p><p>" +
          "Owner: " +
          itemData.info.firstname +
          " " +
          itemData.info.lastname +
          "</p>" +
          "<p>" +
          "CID: " +
          itemData.info.owner +
          "</p>"
      );
    }
```

### ox inventory
