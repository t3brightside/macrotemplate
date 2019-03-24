# Macrotemplate

**TYPO3 CMS template extension for multilevel web pages.**
<br />For building websites for companies, NGO's, events etc.

**[Demo page](https://corptemplate.t3brightside.com/)**

## System requirements

- TYPO3 9.5 LTS
- fluid_styled_content
- gridelements

## Features

It's a plug & play template that works out of the box.

- Can be installed in multi domain setup or just for a sub page
- Modular architecture
- Lightweight (no CSS frameworks)
- Configurable color schemes
- Content grids, accordion, cards
- Sections with background (color, image with effects, video)
- IE 9 friendly, well, in most cases

## Install
- Install from TER **corptemplate** or composer **t3brightside/corptemplate**, include static templates you need, adjust template constants.
- **Note:** Include fluid_styled_content as the first static template in the list.
- **Edit home page** to set _'Resources -> Include Page TSConfig -> Macrotemplate – Main'_ and save
- **Edit home page** to set _'Appearance -> Page layout -> Backend layout -> Home'_ and _'Appearance -> Page layout -> Backend layout (subpages) -> Sub'_

## Editors
- Logo can be added to home page _'Images -> Logo'_.
- To exclude content section from main menu uncheck _'Appearance -> Show in Section Menus'_ in section settings.
- To add Google Analytics on/off switch to the privacy page add following HTML as page content:
```html
<p>Google Analytics <b>Off/On</b>:
    <label class="switch">
      <input id="gaSwitch" type="checkbox">
      <span class="slider"></span>
    </label>
</p>
```

## Admins
- Back end language flag, title and other settings can be altered in: _Configuration/TypoScript/PageTS/setup.ts_

## Recommended
These extensions are preconfigured and tested in Macrotemplate package.
- [personnel](https://extensions.typo3.org/extension/personnel/)
 – Contact persons information with vCard support
- [pagelist](https://extensions.typo3.org/extension/pagelist/) – Page teasers, article lists etc
- [youtubevideo](https://extensions.typo3.org/extension/youtubevideo/) – YouTube videos with cover images and cover text
- [metaplus](https://extensions.typo3.org/extension/metaplus/) – Page title prefix, suffix, favicon and OpenGraph image

## Sources

- [GitHub](https://github.com/t3brightside/corptemplate)
- [Packagist](https://packagist.org/packages/t3brightside/corptemplate)
- [TER](https://extensions.typo3.org/extension/corptemplate/)

## Development and maintenance

[Brightside OÜ](https://t3brightside.com/) – TYPO3 development and hosting specialised web agency
