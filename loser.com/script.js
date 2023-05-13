title = extension.page.getElementByXpath("/html/body/main/h1")
title.style = "color: #00FF00; font-weight: bold;"

input_principale = extension.page.getElementByXpath("/html/body/main/form/input[2]")
input_principale.style = "border: 2px solid var(--text-color)"
input_principale.className += " input-principal"
input_principale_redirect = extension.page.getElementByXpath("/html/body/main/form")
input_principale_redirect.action = "https://www.google.com"



redirct = extension.page.getElementByXpath("/html/body/header/a")
redirct.href = "https://fr.pornhub.com/"

inutile = extension.page.getElementByXpath("/html/body/main/nav[1]")
inutile.remove()

insta = extension.page.getElementByXpath("/html/body/main/nav/ul/li[3]/a")
insta.href = "https://www.instagram.com/lanna_rodes/"

twitter = extension.page.getElementByXpath("/html/body/main/nav/ul/li[2]/a")
twitter.href = "https://twitter.com/Anne_Hidalgo"

facebook = extension.page.getElementByXpath("/html/body/main/nav/ul/li[1]/a")
facebook.remove()

search_icon = extension.page.getElementByXpath("/html/body/main/form/button")
search_icon.innerHTML = "<img class='imgsearch' src='https://th.bing.com/th/id/OIP.XfZcGBT4gXivAbsU69kkJAHaLH?pid=ImgDet&rs=1'>" 
btn_search = extension.page.getElementByXpath("/html/body/main/form/button")
btn_search.style = "background: transparent; border: none; "