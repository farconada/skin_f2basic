lib.footer = COA
lib.footer {
	 9 = TEXT
	 9.value = <div id="footerMenu">
	10 = HMENU
	# defines the menu entrylevel
	10.entryLevel = 0
	10.wrap =
	10.1 = TMENU
	# Wrap the first level of the menu inside an unordered list
	10.1.wrap = <ul id="footerMenuWeb">|</ul>
	# Formatting of menu normal entries as list items.
	10.1.NO {
				wrapItemAndSub = <li class="normal minus">|</li>
	}
	# Current menu item is unlinked and wrapped in span
	10.1.CUR {
				wrapItemAndSub = <li class="current minus">|</li>
				doNotLinkIt = 0
				allWrap = <span>|</span>
	}

	20 = HMENU
	20 {
					special = list
					special.value = {$headerNavigationIncludeList}
					1 = TMENU
					1 {
									noBlur = 1
									wrap = <ul id="footerMenuUtils">|</ul>
									NO = 1
									NO.ATagTitle.field = abstract // description // subtitle
									NO.allWrap = <li>|</li>
									NO.linkWrap = |
									NO.stdWrap.htmlSpecialChars = 1
									CUR < .NO
									CUR = 1
									CUR.allWrap = <li><strong>|</strong></li>
									CUR.doNotLinkIt = 1
									CUR.stdWrap.htmlSpecialChars = 1
						 }
	}



	49 = TEXT
	49.value = </div>
	50 = HTML
	50.value = {$footerText}

}
lib.footer.wrap = <div class="interior">|</div><!-- interior end -->
