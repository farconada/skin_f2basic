[useragent = *iPhone*] && [globalVar = GP:full<1] || [useragent = *iPod*] && [globalVar = GP:full<1] || [useragent = *Android*] && [globalVar = GP:full<1] || [useragent = *Opera Mini*] && [globalVar = GP:full<1] || [useragent = *BlackBerry*] && [globalVar = GP:full<1]
	# Tamaño maximo de las imagenes
	tt_content.image.20.maxW = 150
	tt_content.image.20.1.imageLinkWrap.width = 150
	tt_content.image.20.image_compression = 90
	
	# Se quita menu L1 y se crea un L1+L2
	lib.globalMenu < lib.menuL2
	lib.menuL2 >
	lib.globalMenu.entryLevel = 0
	
	
	#pageMobile.10.subparts.logoheader.10.file.width = 150
	#pageMobile.includeJS >
	#pageMobile.includeCSS.file2.alternate = 0
	#pageMobile.includeCSS >
	#pageMobile.10.subparts.nav-first < temp.nav-top-mobile
	#pageMobile.10.subparts.cols2_destacados.20 >
	#pageMobile.10.subparts.cols3_destacados.50 >
[end]
