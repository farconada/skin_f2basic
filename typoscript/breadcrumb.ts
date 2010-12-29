breadcrumb = COA
breadcrumb.wrap = <div id="breadcrumb">|</div>


breadcrumb.20 = TEXT
breadcrumb.20.data = LLL:EXT:skin_f2basic/locallang_db.xml:tx_skin_f2basic.tscript.breadcrumb.init
breadcrumb.20.wrap = <p class="breadcrumbInit"><span class="breadcrumbIcon">-</span> | &nbsp;</p>

breadcrumb {
	30 = HMENU
	30 {
	 special = rootline
	 special.range = 0|-1
	 wrap = <ol>|</ol>
	 # "not in menu pages" should show up in the breadcrumbs menu
	 includeNotInMenu = 1
	 1 = TMENU
	     # no unneccessary scripting.
	     1.noBlur = 1

	     1.NO {
			 stdWrap.field = title
			 ATagTitle.field = nav_title // title
			 //linkWrap = ||*|  &nbsp;>&nbsp; |*|
			 stdWrap.wrap = <li>|</li>
		 }

		 # Current item should be unlinked
	     1.CUR = 1
	     # Current menu item is unlinked
	     1.CUR {
			 stdWrap.field = title
			 //linkWrap = ||*|  &nbsp;>&nbsp; |*|
			 doNotLinkIt = 1
			 stdWrap.wrap = <li>|</li>
		 }
	    }
}

## en el breadcrumb se muestra el titulo de la noticia en vez de "noticia individual"
lib.newstitle = RECORDS
lib.newstitle {
    dontCheckPid = 1
    tables = tt_news
    source.data = GPvar:tx_ttnews|tt_news
    conf.tt_news = TEXT
    conf.tt_news.field = title
    conf.tt_news.required = 1
}

### solo si hay una noticia individual
[globalVar = GP:tx_ttnews|tt_news > 0]
 breadcrumb.30.1.CUR.stdWrap.cObject < lib.newstitle
[global]
