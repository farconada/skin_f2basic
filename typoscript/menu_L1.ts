globalMenu >
globalMenu = COA
globalMenu.wrap = <div id="globalMenu">|</div><!-- end #globalMenu  -->

//globalMenu.10 = TEXT
//globalMenu.10.data = LLL:EXT:skin_f2basic/locallang_db.xml:tx_skin_f2basic.tscript.menuL1.init
//globalMenu.10.wrap = <h2 class="outOfSight"> | </h2>

globalMenu.20 = HMENU
globalMenu.20.entryLevel = 0
globalMenu.20.wrap = <ul>|</ul>
globalMenu.20.1 = TMENU
globalMenu.20.1 {
	noBlur = 1
	NO.before = <li>|*|<li>|*|<li class="last">
	NO.after = </li>
	NO.stdWrap.htmlSpecialChars = 1
	ACT = 1
	ACT.before = <li class="active">|*|<li class="active">|*|<li class="active last">
	ACT.after = </li>
	ACT.stdWrap.htmlSpecialChars = 1
	}
