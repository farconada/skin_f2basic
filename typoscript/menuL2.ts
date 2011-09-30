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
}

# Wrap the first level of the menu inside an unordered list
lib.menuL2.1.wrap = <ul class="cb-menu">|</ul>

# Formatting of menu normal entries as list items.
lib.menuL2.1.NO {
				wrapItemAndSub = <li class="normal minus">|</li>
				ATagTitle.field=title
				}

# Current menu item is unlinked and wrapped in span
lib.menuL2.1.CUR {
				wrapItemAndSub = <li class="current minus">|</li>
				ATagTitle.field=title
				doNotLinkIt = 0
				allWrap = <span>|</span>
				}

# If the menu item has subs add class plus to change icon to it has subs
lib.menuL2.1.IFSUB {
				wrapItemAndSub = <li class="normal plus">|</li>
				ATagTitle.field=title
				}

# Active items above current to be formatted differently
lib.menuL2.1.ACTIFSUB {
				wrapItemAndSub = <li class="active minus">|</li>
				ATagTitle.field=title
				}


lib.menuL2.2 < lib.menuL2.1

lib.menuL2.2  < lib.menuL2.1
lib.menuL2.2.wrap = <ul class="cb-submenu">|</ul>

lib.menuL2.3 < lib.menuL2.1
lib.menuL2.3.wrap = <ul class="cb-subsubmenu">|</ul>

lib.menuL2.4 < lib.menuL2.1
lib.menuL2.4.wrap = <ul class="cb-subsubsubmenu">|</ul>

lib.menuL2.5 < lib.menuL2.1
lib.menuL2.5.wrap = <ul class="cb-subsubsubsubmenu">|</ul>

lib.menuL2.6 < lib.menuL2.1
lib.menuL2.6.wrap = <ul class="cb-subsubsubsubmenu">|</ul>

lib.menuL2.7 < lib.menuL2.1
lib.menuL2.7.wrap = <ul class="cb-subsubsubsubsubmenu">|</ul>

lib.menuL2.8 < lib.menuL2.1
lib.menuL2.8.wrap = <ul class="cb-subsubsubsubsubsubmenu">|</ul>
