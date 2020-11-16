// Fonctionnalité 1 :
function footerAlert() {
	footer = document.querySelector("footer")
	i = 1
	footer.addEventListener("click", function() {
		alert("clique n° " + i)
		i++
	})
}

footerAlert()

// Fonctionnalité 2 :

function hamburgerMenu() {
	nav = document.getElementById("navbarHeader")
	hambuger = document.querySelector("button", ".navbar-toggler")
	hambuger.addEventListener("click", function () {
		nav.classList.toggle("collapse")
	})
}

hamburgerMenu()

// Fonctionnalité 3 :

function redText() {
	editCardButtonOne = document.querySelectorAll(".btn-outline-secondary")[0]
	textCardOne = document.querySelectorAll(".card-text")[0]
	editCardButtonOne.addEventListener("click", function() {
		textCardOne.style.color = "red"
	})
}

redText()


// Fonctionnalité 4 :

function greenText() {
	editCardButtonTwo = document.querySelectorAll(".btn-outline-secondary")[1]
	textCardTwo = document.querySelectorAll(".card-text")[1]
	i = 1
	editCardButtonTwo.addEventListener("click", function() {
		i++
		if( i % 2 == 0) {
			textCardTwo.style.color = "green"		
		} else {
			textCardTwo.style.color = "rgb(33, 37, 41)"
		}	
	})
}
greenText()

// Fonctionnalité 5 :

function nuclearPage() {
	navbar = document.querySelector("header")
	bootstrap = document.querySelector("head").querySelector("link")
	i = 1
	navbar.addEventListener("dblclick", function () {
		i++
		if( i % 2 == 0) {
			bootstrap.setAttribute("href", "#")
		} else {
			bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
		}
	})
}

nuclearPage()

// Fonctionnalité 6 :

function cardsView() {
	viewButtons = document.querySelectorAll("button.btn.btn-sm.btn-success")
	viewButtons.forEach(function(el) {
		el.addEventListener("mouseover", function(e) {
			card = e.target.offsetParent.offsetParent.offsetParent
			text = card.firstElementChild.lastElementChild.firstElementChild
			if (card.style.maxWidth != "20%") {
				text.hidden = true
				card.style.maxWidth = "20%"
			} else {
				text.hidden = false
				card.style.maxWidth = "100%"
			}
		})
	})
}

cardsView()

// Fonctionnalité 7 : 
function cardsRight() {
	row = document.querySelector(".album").firstElementChild.firstElementChild
	rightRow = document.querySelector("a.btn.btn-secondary.my-2")
	rightRow.addEventListener("click", function() {
		row.insertBefore(row.lastElementChild, row.firstElementChild)
	})
}
cardsRight()