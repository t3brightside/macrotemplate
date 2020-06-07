# Macrotemplate
[![Packagist](https://img.shields.io/packagist/v/t3brightside/macrotemplate.svg?style=flat)](https://packagist.org/packages/t3brightside/macrotemplate)
[![Software License](https://img.shields.io/badge/license-GPLv2-brightgreen.svg?style=flat)](LICENSE)
[![Brightside](https://img.shields.io/badge/by-t3brightside.com-orange.svg?style=flat)](https://t3brightside.com)

**TYPO3 CMS template extension for multilevel web pages.**
<br />For building websites for companies, NGO's, events etc.

**[Demo page](https://macrotemplate.t3brightside.com/)**

## System requirements

- TYPO3 10 LTS
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

## Recommended
These extensions are preconfigured and tested in Macrotemplate package.
- [personnel](https://extensions.typo3.org/extension/personnel/) – Contact persons information with vCard support
- [pagelist](https://extensions.typo3.org/extension/pagelist/) – Page teasers, article lists etc
- [gallerycontent](https://extensions.typo3.org/extension/gallerycontent/) – Gallery item with preset crop ratios
- [awesomeicons](https://extensions.typo3.org/extension/awesomeicons/) – Font Awesome icon tab for content and pages
- [youtubevideo](https://extensions.typo3.org/extension/youtubevideo/) – YouTube videos with cover images and cover text
- [advancedtitle](https://extensions.typo3.org/extension/advancedtitle/) – Page title prefix & suffix
- [favicon](https://extensions.typo3.org/extension/favicon/) – Favicon in page meta data

## Sources

- [GitHub](https://github.com/t3brightside/macrotemplate)
- [Packagist](https://packagist.org/packages/t3brightside/macrotemplate)
- [TER](https://extensions.typo3.org/extension/macrotemplate/)

## Development and maintenance

[Brightside OÜ](https://t3brightside.com/) – TYPO3 development and hosting specialised web agency
