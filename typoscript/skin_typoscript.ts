##############################################################################
#
# This is a modified version of skin_bn_wireframe developed by Ron Hall of BusyNoggin, Inc.
#
##############################################################################
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2basic/typoscript/menu_L1.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2basic/typoscript/breadcrumb.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2basic/typoscript/footer.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2basic/typoscript/topsearchbox.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2basic/typoscript/boxes.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2basic/typoscript/topnav.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2basic/typoscript/menuL2.ts">

lib.stdheader.10.key.ifEmpty = 3
plugin.tx_indexedsearch.templateFile = EXT:indexed_search/pi/template_css.tmpl



##############################################################
# This is TypoScript used to modify the core templates to
# display this skin. Rewrite the header, footer, pre code and
# post code libraries and more when needed to change structure
##############################################################

preCodeHeader = HTML
preCodeHeader.value = <div id="pageWrap">
postCodeHeader >



preCodeFeature = TEXT
preCodeFeature.value = Contenido destacado
preCodeFeature.wrap = <h2 class="outOfSight"> | </h2>
postCodeFeature >

preCodeContent = COA
preCodeContent.10 = HTML
preCodeContent.10.value = <div id="pageContent">
preCodeContent.20 =< lib.breadcrumb


preCodeGeneratedContent-1 >
postCodeGeneratedContent-1 >

preCodeContentBlock-1 = COA
preCodeContentBlock-1.10 = HTML
preCodeContentBlock-1.10.value = <a href="#beginContent" id="beginContent" class="outOfSight" name="beginContent"></a>
preCodeContentBlock-1.20 = TEXT
preCodeContentBlock-1.20.data = page:title
preCodeContentBlock-1.20.wrap = <h2 class="outOfSight">|</h2>
postCodeContentBlock-1 >

preCodeGeneratedContent-2 >
postCodeContentBlock-2 = HTML
postCodeContentBlock-2.value = <div class="clear"></div>

preCodeContentBlock-3 >
postCodeContentBlock-3 >

preCodeGeneratedContent-2 >
postCodeGeneratedContent-2 >


preCodeFooter = COA
preCodeFooter.10 = HTML
preCodeFooter.10.value (
	</div>
	<!-- end #pageContent -->
	<div class="clear"></div>
	<div id="footer">
)
preCodeFooter.20 >


postCodeFooter = HTML
postCodeFooter.value (

	</div>
	<!-- end #footer -->
	</div>
	<!-- end #pageWrap  -->
)



### Lets table classes be added in the RTE
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class.list >
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >



header >
header = COA
header.wrap = <div id="header"> <div class="interior">| </div><!-- interior end--></div>

# Add the masthead for site title / logo.
header.10 = COA
header.10 {
	wrap = <div id="masthead"> | </div>

	# Add <h1> wrapped title if there's no logo
	10 = TEXT
	10.if.isFalse = {$siteLogo}
	10.value = {$siteTitle}
	10.htmlSpecialChars = 1
	10.typolink.parameter = {$siteURL}
				10.typolink.target =
	10.wrap = <h1> | </h1>

	# Add the logo image if one is avaialble.
	20 = IMAGE
	20.if.isTrue = {$siteLogo}
	20.file = {$siteLogo}
	20.file.maxW = {$siteLogoMaxH}
	20.file.maxH = {$siteLogoMaxW}
	20.alttext.cObject = TEXT
	20.alttext.cObject.value = {$siteTitle}
	20.alttext.cObject.insertData = 1
	20.if.isTrue = {$siteLogo}
	20.stdWrap.typolink.parameter = {$siteURL}
				20.stdWrap.typolink.extTarget =

				# Add <h1> wrapped title if there's no logo
	30 = TEXT
	30.if.isTrue = {$siteLogo}
	30.value = {$siteTitle}
	30.htmlSpecialChars = 1
	30.typolink.parameter = {$siteURL}
				30.typolink.extTarget =
	30.wrap = <h1 class="outOfSight"> | </h1>
}

### topnav
header.20 =< lib.topnav

### Search box
header.20.20 =< lib.topsearchbox

header.30 = TEXT
header.30.value = Saltar navegacion e ir al contenido principal
header.30.wrap = <p class="outOfSight"><a href="#begin-content">|</a></p>

header.40 =< lib.globalMenu


footer =< lib.footer

additionalDocHeadCode = HTML
additionalDocHeadCode.value (

	<!--[if IE 6]>
		<link rel="stylesheet" type="text/css" href="{$templavoila_framework.skinPath}css/ie6.css" />
	<![endif]-->
)

# "Menu of subpages to these pages (with abstract)"
tt_content.menu.20.4 {
	special = directory
	wrap >
	1 >
	1 = TMENU
	1 {
		target = {$PAGE_TARGET}
		wrap = <div class="sectionMenuWrapper"><div class="sectionMenu">|</div><div class="clearOnly"></div></div>
		NO {
			allWrap = <div class="menuItem"> | </div>
			before.cObject = COA
			before.cObject {
				10 = IMAGE
				10.if.isTrue.field = media
				10.file.import = uploads/media/
				10.file.import.field = media
				10.file.import.listNum = 0
				10.file.width = 108m
				10.alttext.field = title
				10.params = align="left"
				10.stdWrap.typolink.parameter.field = uid
			}

			after.cObject = COA
			after.cObject {
				30 = TEXT
				30.field = abstract
				30.wrap = <p>|</p></div>
			}

			stdWrap.override.field = subtitle
			linkWrap = <div class="wrapper"><h3>|</h3>
			noBlur = 1
		}
	}
}


page {
	config {
		language = es
		cache = 1
		locale_all = es_ES
		no_cache = 0
		xhtml_cleaning = all
		htmlTag_langKey = es-ES
		index_enable = 1
		metaCharset = iso-8859-1
		#additionalHeaders = Content-Type:text/html;charset=utf-8
		doctype = xhtml_trans
		xhtmlDoctype = xhtml_trans
		xmlprologue = none
		linkVars = type, L
	}
}


