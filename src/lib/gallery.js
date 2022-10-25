export class AsyncGallery {
    constructor(settings) {
        this.settings = settings;

  
      Object.assign(this.settings, settings);
  
      this.gallery = null;
      this.index = 0;
      this.items = [...document.querySelectorAll(this.settings.images)];
  
      this.addedItems = {};
  
      this.touch = {
        endX: 0,
        startX: 0
      };
  
      this.init();
    }
  
    get loading() {
      return !this.settings.hiddenElements.includes("loader");
    }
  
    get dotsVisible() {
      return !this.settings.hiddenElements.includes("dots");
    }
  
    init() {
      this.clearUncomplete();
      this.createElements();
      this.bindEvents();
    }
  
    clearUncomplete() {
      this.items = this.items.filter(item => {
        return item.dataset.large;
      });
    }
  
    createElements() {
      this.gallery = document.createElement("DIV");
      this.gallery.classList.add("asyncGallery");
  
      this.createSingleElement({
        element: "prev",
        type: "BUTTON",
        event: "click",
        func: this.getPrevious
      });
  
      this.createSingleElement({
        element: "next",
        type: "BUTTON",
        event: "click",
        func: this.getNext
      });
  
      this.createSingleElement({
        element: "close",
        type: "BUTTON",
        event: "click",
        func: this.closeGallery
      });
  
      this.createSingleElement({
        element: "loader",
        type: "SPAN",
        text: "Loading..."
      });
  
      this.createSingleElement({
        element: "counter",
        type: "SPAN",
        text: "0/0"
      });
  
      this.createSingleElement({
        element: "dots",
        type: "UL",
        text: ""
      });
  
      if (!this.settings.hiddenElements.includes("dots")) {
        this.items.forEach((item, i) => {
          let dot = document.createElement("LI");
          dot.dataset.index = i;
          let button = document.createElement("BUTTON");
          button.innerHTML = i;
          button.addEventListener("click", () => {
            this.index = i;
            this.getItem(i);
          });
  
          dot.append(button);
          this.dots.append(dot);
        });
      }
  
      window.document.body.append(this.gallery);
    }
  
    createSingleElement({ element, type, event = "click", func, text }) {
      if (!this.settings.hiddenElements.includes(element)) {
        if (!this.settings[element]) {
          this[element] = document.createElement(type);
          this[element].classList.add(
            `asyncGallery__${this.capitalizeFirstLetter(element)}`
          );
          this[element].innerHTML = text !== undefined ? text : element;
          this.gallery.append(this[element]);
        } else {
          this[element] = document.querySelector(this.settings[element]);
          this.gallery.append(this[element]);
        }
  
        if (func) {
          this[element].addEventListener(event, func.bind(this));
        }
      }
    }
  
    getItem(i, content = null) {
      let contentObj = content;
      if (contentObj === null) {
        contentObj = {};
        contentObj.src = this.items[i].dataset.large;
        contentObj.description = this.items[i].dataset.description;
      }
  
      if (!this.settings.hiddenElements.includes("counter")) {
        this.counter.innerHTML = `
            <span class="asyncGallery__Current">${this.index + 1}</span>${
          this.settings.counterDivider
        }<span class="asyncGallery__Current">${this.items.length}</span>
            `;
      }
  
      if (!this.addedItems.hasOwnProperty(i)) {
        let image = document.createElement("IMG");
  
        let galleryItem = document.createElement("DIV");
        galleryItem.classList.add("asyncGallery__Item");
  
        if (this.loading) {
          this.loader.classList.add("is-visible");
        }
  
        this.clearVisible();
  
        if (this.dotsVisible) {
          this.gallery
            .querySelector(`.asyncGallery__Dots li[data-index="${i}"]`)
            .classList.add("is-active");
        }
  
        image.src = contentObj.src;
        image.alt = contentObj.description ? contentObj.description : "";
  
        galleryItem.innerHTML = `
            <div class="asyncGallery__ItemImage">
              ${image.outerHTML}
            </div>
            `;
  
        if (contentObj.description) {
          galleryItem.innerHTML += `
              <div class="asyncGallery__ItemDescription">
                <p>${contentObj.description}</p>
              </div>
              `;
        }
  
        this.gallery.append(galleryItem);
        this.addedItems[i] = galleryItem;
  
        image.addEventListener("load", () => {
          this.addedItems[i].loaded = true;
          if (!this.gallery.querySelector(".asyncGallery__Item.is-visible")) {
            this.addedItems[i].classList.add("is-visible");
          }
  
          if (this.loading) {
            this.loader.classList.remove("is-visible");
          }
        });
      } else {
        this.clearVisible();
        if (this.addedItems[this.index].loaded) {
          this.addedItems[this.index].classList.add("is-visible");
          if (this.loading) {
            this.loader.classList.remove("is-visible");
          }
        } else if (this.loading) {
          this.loader.classList.add("is-visible");
        }
  
        if (this.dotsVisible) {
          this.gallery
            .querySelector(`.asyncGallery__Dots li[data-index="${i}"]`)
            .classList.add("is-active");
        }
      }
  
      if (!this.settings.loop) {
        if (this.index === 0) this.prev.setAttribute("disabled", true);
        else this.prev.removeAttribute("disabled");
  
        if (this.index === this.items.length - 1)
          this.next.setAttribute("disabled", true);
        else this.next.removeAttribute("disabled");
      }
    }
  
    clearVisible() {
      if (this.gallery.querySelector(".asyncGallery__Item.is-visible")) {
        this.gallery
          .querySelector(".asyncGallery__Item.is-visible")
          .classList.remove("is-visible");
      }
  
      if (this.gallery.querySelector(".asyncGallery__Dots li.is-active")) {
        this.gallery
          .querySelector(".asyncGallery__Dots li.is-active")
          .classList.remove("is-active");
      }
    }
  
    closeGallery() {
      this.gallery.classList.remove("is-visible");
      this.clearVisible();
    }
  
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    handleGesure() {
      if (this.touch.endX > this.touch.startX + 20) {
        this.getPrevious();
      } else if (this.touch.endX < this.touch.startX - 20) {
        this.getNext();
      }
    }
  
    getPrevious() {
      if (this.settings.loop) {
        this.index--;
        if (this.index === -1) {
          this.index = this.items.length - 1;
        }
        this.getItem(this.index);
      } else if (this.index > 0) {
        this.index--;
        this.getItem(this.index);
      }
    }
  
    getNext() {
      if (this.settings.loop) {
        this.index++;
        if (this.index === this.items.length) {
          this.index = 0;
        }
        this.getItem(this.index);
      } else if (this.index < this.items.length - 1) {
        this.index++;
        this.getItem(this.index);
      }
    }
  
    bindEvents() {
      this.items.forEach((item, i) => {
        item.addEventListener("click", e => {
          this.gallery.classList.add("is-visible");
          this.index = i;
          this.getItem(i, {
            src: e.target.dataset.large,
            description: e.target.dataset.description
          });
        });
      });
  
      document.addEventListener("keyup", e => {
        if (this.gallery.classList.contains("is-visible")) {
          if (e.key === "Escape") this.closeGallery();
          if (this.settings.keyboardNavigation) {
            if (e.keyCode === 39) this.getNext();
            else if (e.keyCode === 37) this.getPrevious();
          }
        }
      });
  
      this.gallery.addEventListener(
        "touchstart",
        e => {
          this.touch.startX = e.changedTouches[0].screenX;
        },
        false
      );
  
      this.gallery.addEventListener(
        "touchend",
        e => {
          this.touch.endX = e.changedTouches[0].screenX;
          this.handleGesure();
        },
        false
      );
    }
  }
  
