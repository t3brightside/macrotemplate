<?php
defined('TYPO3_MODE') || die();

$tcaHeaderImage = [
	'tx_macrotemplate_headerimage_placement' => [
	    'exclude' => 1,
	    'label' => 'Image Placement on Resize',
	    'config' => [
	    	'type' => 'select',
			'renderType' => 'selectSingle',
			'items' => [
				['Center', 'center center'],
				['Left', 'left center'],
				['Right', 'right center'],
			],
    	],
  	],
];
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('sys_file_reference',$tcaHeaderImage,1);

$tca = [
	'palettes' => [
		'macrotemplateimages' => [
			'label' => 'Template Images',
			'showitem' => '
				tx_macrotemplate_headerimage,
				--linebreak--,
				tx_macrotemplate_icon,
			',
		],
	],
	'columns' => [
		'tx_macrotemplate_headerimage' => [
			'exclude' => 1,
			'label' => 'LLL:EXT:macrotemplate/Resources/Private/Language/locallang_db.xml:tx_macrotemplate_headerimage.title',
			'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
				'tx_macrotemplate_headerimage',
				[
					'behaviour' => [
						'allowLanguageSynchronization' => true,
					],
					// custom configuration for displaying fields in the overlay/reference table
					// to use the image overlay palette instead of the basic overlay palette
					'overrideChildTca' => [
						'types' => [
							'0' => [
								'showitem' => '
									--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
									--palette--;;filePalette'
							],
							\TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
								'showitem' => '
									tx_macrotemplate_headerimage_placement,crop,
			            			--palette--;;filePalette'
							],
						],
					],
				],
				$GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']
			),
		],
		'tx_macrotemplate_icon' => [
			'exclude' => 1,
			'label' => 'LLL:EXT:macrotemplate/Resources/Private/Language/locallang_db.xml:tx_macrotemplate_icon.title',
			'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
				'tx_macrotemplate_icon',
				[
					'behaviour' => [
						'allowLanguageSynchronization' => true,
					],
					// custom configuration for displaying fields in the overlay/reference table
					// to use the image overlay palette instead of the basic overlay palette
					'overrideChildTca' => [
						'types' => [
							'0' => [
								'showitem' => '
									--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
									--palette--;;filePalette'
							],
							\TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
								'showitem' => '
									--palette--;;filePalette,crop'
							],
						],
					],
				],
				'png,svg'
			),
		],
	],
];
$GLOBALS['TCA']['pages'] = array_replace_recursive($GLOBALS['TCA']['pages'], $tca);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
	'pages',
	'--palette--;;macrotemplateimages,',
	'',
	'before:tsconfig_includes'
);

call_user_func(function()
{
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    'macrotemplate',
    'Configuration/PageTS/setup.typoscript',
    'Macrotemplate - Main'
  );
});
