var home, about, contact, menu;

root = document.querySelector(".root");
home = document.querySelector(".home");
about = document.querySelector(".about");
contact = document.querySelector(".contact");
menu  = document.querySelector(".menu");

root.innerHTML = "";
root.appendChild(home);


class Controller{
	constructor()
	{
		this.root = root;
		this.home = home;
		this.about = about;
		this.contact = contact;
		this.menu = menu;
		this.menu_init();
		this.history = [];
	}

	menu_init()
	{
		var Self = this;
		var methods = {
			"Home"    : function(){Self.set_page("home")},
			"About"   : function(){Self.set_page("about")},
			"Contact" : function(){Self.set_page("contact")},
		}

		var elements = this.menu.querySelectorAll(".menu-sub-el");
		elements.forEach(function(element){

			element.style.cursor = "pointer";
			
			if (element.innerText in methods)
			{
				element.addEventListener("click", function()
				{
					
					var stateObj = { page: element.innerText, description : "This my page" };
					

					history.pushState(stateObj, "Test page", element.innerText);

					
					methods[element.innerText]();
				});

				window.onpopstate = function(event) {

  					console.log("onpopstate", history.state, "GGG", history.state['page']);
// 
  					methods[ history.state['page'] ]();

				}
			}
			
		});

	}

	set_page(name)
	{
		this.page_wrapper(name);
	}

	page_wrapper(name)
	{

		this.root.innerHTML = "";
		if (name === "home")
		{

			this.page_home();
		}		

		if (name === "about")
		{
			this.page_about();
		}		

		if (name === "contact")
		{
			this.page_contact();
		}
	}


	page_home()
	{
		this.root.appendChild(this.home);
	}	

	page_about()
	{
		this.root.appendChild(this.about);
	}	

	page_contact()
	{
		this.root.appendChild(this.contact);
	}

}

var controller = new Controller();



// history.pushState(state, title, url);
var stateObj = { foo: "bar", description : "This my page" };

// history.replaceState(stateObj, "Test page", "?test");
// console.log(history.state);



// history.back() // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
// history.back() // alerts "location: http://example.com/example.html, state: null"
// history.go(2)  // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"

// console.log(home);

// root.appendChild(home);
