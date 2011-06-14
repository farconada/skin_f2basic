lib.menuL2 = HMENU
# defines the menu entrylevel
lib.menuL2.entryLevel = 1
lib.menuL2.wrap = <div id="menu-sections">|</div>
lib.menuL2.1 = TMENU
lib.menuL2.1 {
				noBlur = 1
				CUR = 1
				IFSUB= 1
				ACTIFSUB = 1
				accessKey = 1
				ATagTitle.field=title
}

# Wrap the first level of the menu inside an unordered list
lib.menuL2.1.wrap = <ul class="cb-menu">|</ul>

# Formatting of menu normal entries as list items.
lib.menuL2.1.NO {
				wrapItemAndSub = <li class="normal minus">|</li>
				}

# Current menu item is unlinked and wrapped in span
lib.menuL2.1.CUR {
				wrapItemAndSub = <li class="current minus">|</li>
				doNotLinkIt = 0
				allWrap = <span>|</span>
				}

# If the menu item has subs add class plus to change icon to it has subs
lib.menuL2.1.IFSUB {
				wrapItemAndSub = <li class="normal plus">|</li>
				}

# Active items above current to be formatted differently
lib.menuL2.1.ACTIFSUB {
				wrapItemAndSub = <li class="active minus">|</li>
				}


lib.menuL2.2 < lib.menuL2.1


lib.menuL2.2 = TMENU
lib.menuL2.2.wrap = <ul class="cb-submenu">|</ul>

lib.menuL2.3 = TMENU
lib.menuL2.3.wrap = <ul class="cb-subsubmenu">|</ul>

lib.menuL2.4 = TMENU
lib.menuL2.4.wrap = <ul class="cb-subsubsubmenu">|</ul>

lib.menuL2.5 = TMENU
lib.menuL2.5.wrap = <ul class="cb-subsubsubsubmenu">|</ul>

lib.menuL2.6 = TMENU
lib.menuL2.6.wrap = <ul class="cb-subsubsubsubmenu">|</ul>
