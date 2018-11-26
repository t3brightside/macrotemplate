#
# Table structure for table 'pages'
#
CREATE TABLE pages (
	tx_macrotemplate_headerimage int(11) unsigned DEFAULT '0',
  tx_macrotemplate_icon int(11) unsigned DEFAULT '0',
);
CREATE TABLE sys_file_reference (
 tx_macrotemplate_headerimage_placement tinytext,
);

CREATE TABLE pages_language_overlay (
	tx_macrotemplate_headerimage int(11) unsigned DEFAULT '0',
  tx_macrotemplate_icon int(11) unsigned DEFAULT '0',
);
