// Skin Specific JS goes here. The jQuery library has already been loaded by the core templates. So if you use jQuery, you are ready to go.
jQuery(document).ready(function() {
	defaultSearchValue = jQuery('#siteSearchInput')[0].value;

	jQuery('#siteSearchInput').focus(function() {
		if (jQuery(this)[0].value === defaultSearchValue) {
			jQuery(this)[0].value = '';
		}
	});

	jQuery('#siteSearchInput').blur(function() {
		if (jQuery(this)[0].value === '') {
			jQuery(this)[0].value = defaultSearchValue;
		}
	});
});
