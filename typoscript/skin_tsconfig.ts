##############################################################
# Place TypoScript for the Page TS Config. Most often used
# to affect the RTE
##############################################################

RTE.default.contentCSS = EXT:skin_f2basic/css/rte.css
RTE.default.classesTD = spancolumn-1,spancolumn-2,spancolumn-3,spancolumn-4,spancolumn-5,spancolumn-6,spancolumn-7,spancolumn-8,spancolumn-9,spancolumn-10,spancolumn-11,spancolumn-12
RTE.default.classesTable = 
RTE.default.classesCharacter = red-highlight
RTE.default.classesParagraph = feature-text, big-text, red-highlight
RTE.default.proc.allowedClasses = first-header,feature-text,big-text,red-highlight,align-center,align-left,align-right
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class.list >

RTE.classes {
	first-header {
		name = First Header
	}
	feature-text {
		name = Feature Text
	}
	big-text {
		name = Big Text
	}
	red-highlight {
		name = Red Highlight
	}
	spancolumn-1 {
		name = Cell Width  50px
	}
	spancolumn-2 {
		name = Cell Width 100px
	}
	spancolumn-3 {
		name = Cell Width 150px
	}
	spancolumn-4 {
		name = Cell Width 200px
	}
	spancolumn-5 {
		name = Cell Width 250px
	}
	spancolumn-6 {
		name = Cell Width 300px
	}
	spancolumn-7 {
		name = Cell Width 350px
	}
	spancolumn-8 {
		name = Cell Width 400px
	}
	spancolumn-9 {
		name = Cell Width 450px
	}
	spancolumn-10 {
		name = Cell Width 500px
	}
	spancolumn-11 {
		name = Cell Width 550px
	}
	spancolumn-12 {
		name = Cell Width 600px
	}
}

RTE.default.showButtons =


RTE.default.showButtons = *

RTE.default.proc {
	exitHTMLparser_db = 1
	exitHTMLparser_db {
		tags.b.remap = strong
		tags.i.remap = em
	###	keepNonMatchedTags = 1
	}
}

