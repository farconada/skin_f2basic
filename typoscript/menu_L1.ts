lib.globalMenu >
lib.globalMenu = COA
lib.globalMenu.wrap = <div id="globalMenu">|</div><!-- end #globalMenu  -->

//globalMenu.10 = TEXT
//globalMenu.10.data = LLL:EXT:skin_f2basic/locallang_db.xml:tx_skin_f2basic.tscript.menuL1.init
//globalMenu.10.wrap = <h2 class="outOfSight"> | </h2>

lib.globalMenu.20 = HMENU
lib.globalMenu.20.entryLevel = 0
lib.globalMenu.20.wrap = <ul>|</ul>
lib.globalMenu.20.1 = TMENU
lib.globalMenu.20.1 {
	noBlur = 1
	NO.before = <li>|*|<li>|*|<li class="last">
	NO.after = </li>
	NO.stdWrap.htmlSpecialChars = 1
	ACT = 1
	ACT.before = <li class="active">|*|<li class="active">|*|<li class="active last">
	ACT.after = </li>
	ACT.stdWrap.htmlSpecialChars = 1
	}
