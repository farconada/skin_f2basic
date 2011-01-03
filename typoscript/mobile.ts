[useragent = *iPhone*] && [globalVar = GP:full<1] || [useragent = *iPod*] && [globalVar = GP:full<1] || [useragent = *Android*] && [globalVar = GP:full<1] || [useragent = *Opera Mini*] && [globalVar = GP:full<1] || [useragent = *BlackBerry*] && [globalVar = GP:full<1]
	# Tamaño maximo de las imagenes
	tt_content.image.20.maxW = 150
	tt_content.image.20.1.imageLinkWrap.width = 150
	tt_content.image.20.image_compression = 90

	# Se quita menu L1 y se crea un L1+L2
	lib.globalMenu < lib.menuL2
	lib.menuL2 >
	lib.globalMenu.entryLevel = 0
	#sin menu TopNav
	lib.topnav.10 >

	page.includeCSS.tf_skin_main.media = screen and (min-width: 481px)
	page.includeCSS.mobile = EXT:skin_f2basic/css/mobile.css
	page.includeCSS.mobile.media = only screen and (max-width: 480px)

	page.meta.viewport = user-scalable=no, width=device-width


[end]
