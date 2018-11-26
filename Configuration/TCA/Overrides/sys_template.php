<?php
defined('TYPO3_MODE') || die();

call_user_func(function()
{
  /**
   * Temporary variables
   */
  $extensionKey = 'macrotemplate';

  /**
   * Default TypoScript for Macrotemplate
   */
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript',
    'Macrotemplate - Main'
  );

  /**
   * Custom templates for optional scripts
   */
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Extensions/magnificpopup/Configuration/TypoScript',
    'Macrotemplate - script: Magnificpopup'
  );
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Extensions/google_analytics/Configuration/TypoScript',
    'Macrotemplate - script: Google Analytics'
  );
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Extensions/cookie_consent/Configuration/TypoScript',
    'Macrotemplate - script: Cookie Consent'
  );
});
