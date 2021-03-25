<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Macrotemplate',
    'description' => 'TYPO3 CMS template package. Demo at: https://macrotemplate.t3brightside.com',
    'category' => 'templates',
    'constraints' => [
      'depends' => [
        'typo3' => '10.4.0 - 11.5.99',
        'fluid_styled_content' => '10.4.0 - 11.5.99',
        'gridelements' => '10.0.0-11.5.99',
      ],
      'conflicts' => [
      ],
    ],
    'state' => 'beta',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'version' => '0.0.6',
  ];
