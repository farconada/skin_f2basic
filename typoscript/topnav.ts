### top nagivation
topnav = COA
topnav.stdWrap.wrap = <div class="topNav"> | </div><div class="clear"></div>
topnav.stdWrap.required = 1
topnav.10 = COA
topnav.10 {
	stdWrap.wrap = <div id="login">|</div>
	stdWrap.required = 1

	10 = COA
	10 {
		10 = HMENU
		10 {
			special = list
			special.value = {$headerNavigationIncludeList}
			1 = TMENU
			1 {
				noBlur = 1
				wrap = <ul>|</ul>
							NO = 1
							NO.ATagTitle.field = abstract // description // subtitle
							NO.allWrap = <li>|</li>
							NO.linkWrap = |
							NO.stdWrap.htmlSpecialChars = 1
							CUR < .NO
							CUR = 1
							CUR.allWrap = <li><strong>|</strong></li>
							CUR.doNotLinkIt = 1
							CUR.stdWrap.htmlSpecialChars = 1
				 }
		}
		20 = TEXT
		20 {
			# Only show the login link if there's a valid page to link to
			if.isTrue = {$loginPID}
			if.isTrue.insertData = 1

			data = LLL:EXT:skin_f2basic/locallang_db.xml:tx_skin_f2basic.tscript.topnav.login.loginlabel
			typolink.parameter = {$loginPID}
			typolink.additionalParams = &return_url={getIndpEnv : REQUEST_URI}
			typolink.additionalParams.insertData = 1
		}

		30 = TEXT
		30 {
			# Only show the login link if there's a valid page to link to
			if.isTrue = {$loginPID}
			if.isTrue.insertData = 1

			value = {$loginLabel}
			insertData = 1
		}

		40 = TEXT
		40 {
			# Only show the registration link if there's a valid page to link to
			if.isTrue = {$registerPID}
			if.isTrue.insertData = 1

			value = {$signupText}
			typolink.parameter = {$registerPID}
			typolink.additionalParams = &tx_srfeuserregister_pi1[cmd]=create
		}
	}
}

[loginUser = *]
topnav.10.10 >
topnav.10.10 = COA_INT
topnav.10.10 {
	10 = HMENU
	10 {
		special = list
		special.value = {$headerNavigationIncludeList}
		1 = TMENU
		1 {
			noBlur = 1
			wrap = <ul>|</ul>
			NO = 1
			NO.ATagTitle.field = abstract // description // subtitle
			NO.allWrap = <li>|</li>
			NO.linkWrap = |
			NO.stdWrap.htmlSpecialChars = 1
			CUR < .NO
			CUR = 1
			CUR.allWrap = <li><strong>|</strong></li>
			CUR.doNotLinkIt = 1
			CUR.stdWrap.htmlSpecialChars = 1
			 }
	}

	15 = TEXT
	15.data = LLL:EXT:skin_f2basic/locallang_db.xml:tx_skin_f2basic.tscript.topnav.login.welcome
	20 = TEXT
	20 {
		data = TSFE:fe_user|user|first_name // TSFE:fe_user|user|username
		wrap = {$topNavWrap}

		# Only show the edit link if there's a valid page to link to
		typolink.if.isTrue = {$registerPID}
		typolink.if.isTrue.insertData = 1
		typolink.parameter = {$registerPID}
		typolink.additionalParams = &tx_srfeuserregister_pi1[cmd]=edit
	}

	30 = TEXT
	30 {
		data = LLL:EXT:skin_f2basic/locallang_db.xml:tx_skin_f2basic.tscript.topnav.login.logout
		typolink.parameter.data = TSFE : id
		typolink.addQueryString = 1
		typolink.addQueryString.method = GET
		typolink.additionalParams = &logintype=logout
	}
}
[global]
