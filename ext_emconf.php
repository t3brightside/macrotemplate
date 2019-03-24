<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Macrotemplate',
    'description' => 'Corporste template package. Demo at: https://macrotemplate.t3brightside.com',
    'category' => 'templates',
    'constraints' => [
      'depends' => [
        'typo3' => '9.5.0 - 9.5.99',
        'fluid_styled_content' => '9.5.0 - 9.5.99',
      ],
      'conflicts' => [
      ],
    ],
    'state' => 'alpha',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'version' => '0.1.2',
  ];
