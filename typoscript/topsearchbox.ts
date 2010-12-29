### Search box
topsearchbox = COA
topsearchbox {
	# Only show the search box if there is a valid search page.
	if.isTrue = {$searchPID}
	if.isTrue.insertData = 1

	wrap = <div id="search"> | </form></div><div class="clear"></div>

	10 = TEXT
	10 {
		typolink.parameter = {$searchPID}
		typolink.returnLast = url
		wrap = <form id="siteSearch" name="site_search" method="post" action="|">
	}

	20 = TEXT
	20.data = LLL:EXT:skin_f2basic/locallang_db.xml:tx_skin_f2basic.tscript.topsearchbox.init
	20.wrap = <label class="outOfSight" for="siteSearchInput">|</label>

	30 = HTML
	30.value (
		<input id="siteSearchInput" type="text" value="Buscar" name="tx_indexedsearch[sword]"/>
		<input id="siteSearchSubmit" type="submit" class="searchsubmit" value="buscar" name="siteSearchSubmit" />
	)
	30.insertData = 1
}
