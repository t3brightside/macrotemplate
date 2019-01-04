<?php
	defined('TYPO3_MODE') || die();

	$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['macrotemplate'] = 'EXT:macrotemplate/Configuration/RTE/Default.yaml';
	$GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields'].= ',tx_macrotemplate_headerimage,uid';
	if (TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('personnel')){
  	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
  		macrotemplate.personnelIsLoaded = 1
  	');
  } else {
  	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
  		macrotemplate.personnelIsLoaded = 0
  	');
  }
