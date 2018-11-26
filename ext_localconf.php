<?php
	defined('TYPO3_MODE') || die();

	$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['macrotemplate'] = 'EXT:macrotemplate/Configuration/RTE/Default.yaml';
	$GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields'].= ',tx_macrotemplate_headerimage,uid';
